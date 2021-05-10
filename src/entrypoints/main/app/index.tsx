import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles';
import theme from './theme';

import Router from '../router';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);

export default App;
