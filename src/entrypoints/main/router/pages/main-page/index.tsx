import React, { memo, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import SC from './styled';

import Translation from '../../../../../components/translation';

interface Props extends RouteComponentProps {}

const MainPage: FC<Props> = () => (
  <SC.MainPage>
    <SC.Title>
      <Translation id='title' />
    </SC.Title>
  </SC.MainPage>
);

export default memo(MainPage);
