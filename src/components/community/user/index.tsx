import React, { FC } from 'react';

import env from '../../../env';

import SC from './styled';

import type { CommunityUser } from '../../../types';

const { COMMUNITY_API_HOST } = env;

interface Props {
  user: CommunityUser;
}

const User: FC<Props> = ({ user }) => (
  <SC.User href={`${COMMUNITY_API_HOST}/user/${user.userslug}`}>
    {user.picture ? (
      <SC.Picture src={`${COMMUNITY_API_HOST}${user.picture}`} />
    ) : (
      <SC.Icon colour={user['icon:bgColor']}>{user['icon:text']}</SC.Icon>
    )}

    <SC.Name colour={user['icon:bgColor']}>
      {user.displayname ?? user.username}
    </SC.Name>
  </SC.User>
);

export default User;
