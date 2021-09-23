import React, { FC } from 'react';

import Translation from '../../translation';

import env from '../../../env';

import SC from './styled';

import type { CommunityUser } from '../../../types';
import { CommunityPlaceholder } from '../../../types/enums';

const { COMMUNITY_API_HOST } = env;

interface Props {
  user: CommunityUser;
}

const User: FC<Props> = ({ user }) => {
  const userName = () => {
    const name = user.displayname ?? user.username;
    return name === CommunityPlaceholder.FORMER_USER ? (
      <Translation id='community.formerUser' />
    ) : (
      name
    );
  };

  return (
    <SC.User href={`${COMMUNITY_API_HOST}/user/${user.userslug}`}>
      {user.picture ? (
        <SC.Picture src={`${COMMUNITY_API_HOST}${user.picture}`} />
      ) : (
        <SC.Icon colour={user['icon:bgColor']}>{user['icon:text']}</SC.Icon>
      )}

      <SC.Name colour={user['icon:bgColor']}>{userName()}</SC.Name>
    </SC.User>
  );
};

export default User;
