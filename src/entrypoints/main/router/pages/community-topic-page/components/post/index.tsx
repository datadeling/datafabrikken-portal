import React, { FC, memo } from 'react';

import { compose } from 'redux';

import parse from 'html-react-parser';

import env from '../../../../../../../env';

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

const { COMMUNITY_API_HOST } = env;

const Post: FC<Props> = ({ post: { content, user, timestampISO } }) => (
  <SC.Post>
    <SC.UserInfo>
      <User user={user} />
      {formatDateTime(new Date(timestampISO))}
    </SC.UserInfo>
    <SC.Content>
      {content === CommunityPlaceholder.POST_DELETED ? (
        <Translation id='community.postDeleted' />
      ) : (
        parse(
          content.replaceAll(
            'src="/assets/',
            `src="${COMMUNITY_API_HOST}/assets/`
          )
        )
      )}
    </SC.Content>
  </SC.Post>
);

export default compose<FC<ExternalProps>>(memo)(Post);
