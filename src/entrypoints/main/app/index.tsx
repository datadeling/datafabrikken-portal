import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import GlobalStyles from './styles';
import theme from './theme';

import Router from '../router';
import TranslationsProvider from '../../../providers/translations';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <CookiesProvider>
      <TranslationsProvider>
        <ParallaxProvider>
          <Router />
        </ParallaxProvider>
      </TranslationsProvider>
    </CookiesProvider>
  </ThemeProvider>
);

export default App;
