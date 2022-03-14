import React, { FC, useEffect } from 'react';
import { compose } from 'redux';

import CommentCard from '../comment-card';
import { CommunityPost } from '../../../../../types';
import {
  useGetThreadByIdQuery,
  useGetUserQuery
} from '../../../../../services/api/user-feedback-api/comments';

interface ExternalProps {
  entityId: string;
  page: number;
  replies: Record<string, CommunityPost[]>;
  updateReplies: (posts: CommunityPost[], page: number) => void;
}

const CommentPage: FC<ExternalProps> = ({
  entityId,
  page,
  replies,
  updateReplies
}) => {
  const { data: currentUser } = useGetUserQuery();
  const { rootComments, pageReplies, isInitalizing, isReloading } =
    useGetThreadByIdQuery(
      { id: entityId, page },
      {
        selectFromResult: ({ data, isFetching, isLoading }) => ({
          rootComments:
            data?.posts?.filter(
              post => !post.toPid && `${post.index}` !== '0'
            ) ?? [],
          pageReplies: data?.posts?.filter(post => post.toPid) ?? [],
          isInitalizing: isFetching,
          isReloading: isLoading
        })
      }
    );

  useEffect(() => {
    if (!isInitalizing && !isReloading) {
      updateReplies(
        pageReplies.map(reply => ({ ...reply, page })),
        page
      );
    }
  }, [isInitalizing, isReloading]);

  return (
    <>
      {rootComments?.map(comment => (
        <CommentCard
          comment={{ ...comment, page }}
          currentUser={currentUser}
          entityId={entityId}
          isReply={false}
          replies={replies[comment.pid]}
          key={`comment-card-p${page}-id-${comment.pid}`}
        />
      ))}
    </>
  );
};

export default compose<FC<ExternalProps>>()(CommentPage);
