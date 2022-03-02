import React, { FC } from 'react';

import Translation from '../../translation';

import env from '../../../env';

import SC from './styled';

import type { CommunityUser } from '../../../types';
import { CommunityTemplateTag } from '../../../types/enums';

const { COMMUNITY_API_HOST } = env;

interface Props {
  user: CommunityUser;
}

const User: FC<Props> = ({ user }) => {
  const userName = () => {
    const name = user.displayname ?? user.username;
    return name === `[[${CommunityTemplateTag.FORMER_USER}]]` ? (
      <Translation id='community.formerUser' />
    ) : (
      name
    );
  };

  return (
    <SC.User>
      {user.picture ? (
        <SC.Picture src={`${COMMUNITY_API_HOST}${user.picture}`} />
      ) : (
        <SC.Icon $colour={user['icon:bgColor']}>{user['icon:text']}</SC.Icon>
      )}
      <SC.NameWrapper>
        <SC.Name $colour={user['icon:bgColor']}>{userName()}</SC.Name>
      </SC.NameWrapper>
    </SC.User>
  );
};

export default User;
