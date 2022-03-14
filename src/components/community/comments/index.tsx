import React, { FC, memo, useState } from 'react';
import { compose } from 'redux';

import { withAuth, Props as AuthProps } from '../../../providers/auth';
import SC from './styled';
import Buttons from './components/buttons/styled';
import Composer from './components/composer';
import env from '../../../env';
import ExternalLink from '../../link-external';
import {
  useGetThreadByIdQuery,
  useGetUserQuery,
  usePostCommentMutation
} from '../../../services/api/user-feedback-api/comments';
import Translation from '../../translation';
import LogOut from './components/logOut';
import CommentPage from './components/comment-page';
import { CommunityPost } from '../../../types';

const { COMMUNITY_API_HOST } = env;

interface ExternalProps {
  entityId: string;
}

interface Props extends AuthProps, ExternalProps {}

const CommentSection: FC<Props> = ({ entityId, authService }) => {
  const [page, setPage] = useState(1);
  const [repliesByPage, setRepliesByPage] = useState<
    Record<string, CommunityPost[]>
  >({});
  const [newCommentOpen, setNewCommentOpen] = useState(false);
  const [postComment] = usePostCommentMutation();
  const { data: currentUser } = useGetUserQuery();
  const { currentPage = 1, pageCount = 1 } = useGetThreadByIdQuery(
    { id: entityId, page: 1 },
    {
      selectFromResult: ({ data }) => ({
        ...data?.pagination
      })
    }
  );

  const authenticated =
    authService.isAuthenticated() && !authService.isTokenExpired();
  const isLoggedIn = authenticated && currentUser;
  const hasMoreComments = pageCount > 1 && currentPage !== pageCount;
  const flatReplies = Object.values(repliesByPage)
    .flat()
    .sort((a, b) => a.timestamp - b.timestamp);
  const repliesByToPid = flatReplies.reduce((prev, reply) => {
    const key = reply.toPid ?? '0';
    const prevReplies = prev[key];
    return prevReplies
      ? { ...prev, [key]: [...prevReplies, reply] }
      : { ...prev, [key]: [reply] };
  }, {} as Record<string, CommunityPost[]>);

  const updateReplies = (newReplies: CommunityPost[], pageNumber: number) => {
    setRepliesByPage({ ...repliesByPage, [pageNumber]: newReplies });
  };

  return (
    <>
      <SC.Ingress>
        <Translation id='community.comments.ingress' />
      </SC.Ingress>
      <SC.CommentsInterfaceContainer>
        {isLoggedIn && newCommentOpen && (
          <Composer
            onSubmit={(content: string) =>
              postComment({
                id: entityId,
                post: { content }
              })
            }
            openToggle={() => setNewCommentOpen(false)}
            showLogout
          />
        )}

        {isLoggedIn && !newCommentOpen && (
          <SC.PostCommentButtons>
            <Buttons.BigButton onClick={() => setNewCommentOpen(true)}>
              <Translation id='community.comments.buttons.feedback' />
              <SC.CommentIcon />
            </Buttons.BigButton>
            <LogOut />
          </SC.PostCommentButtons>
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
          <SC.PostCommentButtons>
            <ExternalLink href={`${COMMUNITY_API_HOST}/login`} openInNewTab>
              <Translation id='community.comments.noCommunityUser' />
            </ExternalLink>
            <LogOut />
          </SC.PostCommentButtons>
        )}
      </SC.CommentsInterfaceContainer>
      <SC.Comments>
        {[...Array(page).keys()].map((pageIndex: number) => (
          <CommentPage
            entityId={entityId}
            page={pageIndex + 1}
            replies={repliesByToPid}
            updateReplies={updateReplies}
            key={`comment-page-p${pageIndex}`}
          />
        ))}
        <SC.ButtonContainer>
          {page > 1 && (
            <Buttons.UnderlineButton onClick={() => setPage(1)}>
              <Translation id='community.comments.buttons.collapseComments' />
            </Buttons.UnderlineButton>
          )}
          {hasMoreComments && page !== pageCount && (
            <Buttons.UnderlineButton onClick={() => setPage(page + 1)}>
              <Translation id='community.comments.buttons.loadComments' />
            </Buttons.UnderlineButton>
          )}
        </SC.ButtonContainer>
      </SC.Comments>
    </>
  );
};

export default compose<FC<ExternalProps>>(memo, withAuth)(CommentSection);
