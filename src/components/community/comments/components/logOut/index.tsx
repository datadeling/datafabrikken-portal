import React, { FC, memo } from 'react';
import { compose } from 'redux';
import { withAuth, Props as AuthProps } from '../../../../../providers/auth';
import { useGetUserQuery } from '../../../../../services/api/user-feedback-api/comments';
import Translation from '../../../../translation';

import Buttons from '../buttons/styled';

import SC from './styled';

const LogOut: FC<AuthProps> = ({ authService }) => {
  const { data: currentUser } = useGetUserQuery();

  return (
    <SC.LogOutContainer>
      {currentUser?.username && (
        <span>
          <Translation id='community.comments.session' />
          {currentUser?.username} &bull;{' '}
        </span>
      )}
      <Buttons.UnderlineButton onClick={() => authService.signOut()}>
        <Translation id='community.comments.buttons.logOutFeedback' />
      </Buttons.UnderlineButton>
    </SC.LogOutContainer>
  );
};

export default compose<FC>(memo, withAuth)(LogOut);
