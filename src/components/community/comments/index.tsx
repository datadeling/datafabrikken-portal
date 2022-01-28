import React, { FC, memo, useState } from 'react';
import { compose } from 'redux';

import { withAuth, Props as AuthProps } from '../../../providers/auth';
import SC from './styled';
import Buttons from './components/buttons/styled';
import Composer from './components/composer';
import CommentCard from './components/comment-card';
import { CommunityPost } from '../../../types';
import env from '../../../env';
import ExternalLink from '../../link-external';
import {
  usePostCommentMutation,
  useGetThreadByIdQuery,
  useGetUserQuery
} from '../../../services/api/user-feedback-api/comments';
import Translation from '../../translation';

const { COMMUNITY_API_HOST } = env;

interface ExternalProps {
  entityId: string;
}

interface Props extends AuthProps, ExternalProps {}

const CommentSection: FC<Props> = ({ entityId, authService }) => {
  const [postComment] = usePostCommentMutation();
  const [newCommentOpen, setNewCommentOpen] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);

  const { data: currentUser } = useGetUserQuery();
  const { postsWithoutFirst } = useGetThreadByIdQuery(entityId, {
    selectFromResult: ({ data }) => ({
      postsWithoutFirst: data?.posts.slice(1) ?? []
    })
  });

  const rootComments = postsWithoutFirst.filter(post => post.toPid == null);
  const replies = postsWithoutFirst.reduce((prev, post) => {
    if (post.toPid != null) {
      return post.toPid in prev
        ? { ...prev, [post.toPid]: [...prev[post.toPid], post] }
        : { ...prev, [post.toPid]: [post] };
    }
    return prev;
  }, {} as Record<string, CommunityPost[]>);
  const maxVisibleComments = 3;
  const croppedComments = showAllComments
    ? rootComments
    : rootComments.slice(0, maxVisibleComments);
  const authenticated =
    authService.isAuthenticated() && !authService.isTokenExpired();
  const isLoggedIn = authenticated && currentUser != null;

  return (
    <>
      <SC.Ingress>
        <Translation id='community.comments.ingress' />
      </SC.Ingress>
      <SC.CommentsInterfaceContainer>
        {isLoggedIn && newCommentOpen && (
          <Composer
            onSubmit={(content: string) =>
              postComment({ id: entityId, post: { content } })
            }
            openToggle={() => setNewCommentOpen(false)}
          />
        )}

        {isLoggedIn && !newCommentOpen && (
          <Buttons.BigButton onClick={() => setNewCommentOpen(true)}>
            <Translation id='community.comments.buttons.feedback' />
            <SC.CommentIcon />
          </Buttons.BigButton>
        )}

        {!authenticated && (
          <Buttons.BigButton
            onClick={() => {
              window.location.hash = 'comment-section';
              authService.signIn();
            }}
          >
            <Translation id='community.comments.buttons.logInFeedback' />
          </Buttons.BigButton>
        )}

        {authenticated && !currentUser && (
          <ExternalLink href={`${COMMUNITY_API_HOST}/login`} openInNewTab>
            <Translation id='community.comments.noCommunityUser' />
          </ExternalLink>
        )}
      </SC.CommentsInterfaceContainer>
      <SC.Comments>
        {croppedComments?.map((comment, index) => (
          <CommentCard
            comment={comment}
            currentUser={currentUser}
            entityId={entityId}
            isReply={false}
            replies={replies[comment.pid]}
            key={`comment-card-${index}-id-${comment.pid}`}
          />
        ))}
        {rootComments.length > maxVisibleComments && (
          <Buttons.UnderlineButton
            onClick={() => setShowAllComments(!showAllComments)}
          >
            {showAllComments ? (
              <Translation id='community.comments.buttons.collapseComments' />
            ) : (
              <Translation
                id='community.comments.buttons.expandComments'
                values={{ count: rootComments.length }}
              />
            )}
          </Buttons.UnderlineButton>
        )}
      </SC.Comments>
    </>
  );
};

export default compose<FC<ExternalProps>>(memo, withAuth)(CommentSection);
