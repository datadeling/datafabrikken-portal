import React, { FC } from 'react';

import Root from '../root';
import Error400 from './components/error-400';
import Error500 from './components/error-500';

import SC from './styled';
import Header from '../header';

interface Props {
  errorCode?: string;
}

const errorMessage = (errorCode?: string) => {
  switch (errorCode) {
    case '404':
      return <Error400 />;
    case '500':
    default:
      return <Error500 />;
  }
};

const ErrorPage: FC<Props> = ({ errorCode }) => (
  <Root>
    <SC.ErrorPage>
      <Header />
      {errorMessage(errorCode)}
    </SC.ErrorPage>
  </Root>
);

export default ErrorPage;
