import React, { memo, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import SC from './styled';

interface Props extends RouteComponentProps {}

const MainPage: FC<Props> = () => (
  <SC.MainPage>
    <SC.Title>Datafabrikken</SC.Title>
  </SC.MainPage>
);

export default memo(MainPage);
