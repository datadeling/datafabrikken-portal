import React, { FC } from 'react';
import Translation from '../../../translation';

import SC from './styled';

const Error500: FC = () => (
  <SC.Container>
    <SC.Error500>
      <SC.Error500Icon />
      <SC.Title>
        <Translation id='errorPage.serverError.title' />
      </SC.Title>
      <SC.SubTitle>
        <Translation id='errorPage.serverError.content1' />
        <br />
        <Translation id='errorPage.serverError.content2' />
      </SC.SubTitle>
    </SC.Error500>
  </SC.Container>
);

export default Error500;
