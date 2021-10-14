import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import GlobalStyles from './styles';
import { defaultTheme as theme } from './theme';

import Router from '../router';
import TranslationsProvider from '../../../providers/translations';

import store from '../redux/store';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <CookiesProvider>
      <TranslationsProvider>
        <ParallaxProvider>
          <ReduxProvider store={store}>
            <Router />
          </ReduxProvider>
        </ParallaxProvider>
      </TranslationsProvider>
    </CookiesProvider>
  </ThemeProvider>
);

export default App;
