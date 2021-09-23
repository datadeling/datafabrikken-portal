import React, { FC, memo } from 'react';

import { compose } from 'redux';

import parse from 'html-react-parser';

import { CommunityPost } from '../../../../../../../types';

import Translation from '../../../../../../../components/translation';

import SC from './styled';
import User from '../../../../../../../components/community/user';
import { formatDateTime } from '../../../../../../../utils/date';
import { CommunityPlaceholder } from '../../../../../../../types/enums';

interface ExternalProps {
  post: CommunityPost;
}

interface Props extends ExternalProps {}

const Post: FC<Props> = ({ post: { content, user, timestampISO, index } }) => (
  <SC.Post $firstPost={index === 0}>
    <SC.UserInfo>
      <User user={user} />
      {formatDateTime(new Date(timestampISO))}
    </SC.UserInfo>
    <SC.Content>
      {content === CommunityPlaceholder.POST_DELETED ? (
        <Translation id='community.postDeleted' />
      ) : (
        parse(content)
      )}
    </SC.Content>
  </SC.Post>
);

export default compose<FC<ExternalProps>>(memo)(Post);
