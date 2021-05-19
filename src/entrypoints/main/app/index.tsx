import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles';
import theme from './theme';

import Router from '../router';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  </ThemeProvider>
);

export default App;
