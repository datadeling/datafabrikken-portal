import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles';
import { defaultTheme as theme } from './theme';

import Router from '../router';
import TranslationsProvider from '../../../providers/translations';

import store from '../redux/store';

import AuthProvider from '../../../providers/auth';
import { initAnalytics } from '../../../utils/analytics';
import AnalyticsMonsido from '../../../components/analytics-monsido';
import AnalyticsSiteImprove from '../../../components/analytics-siteimprove';

initAnalytics();

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AnalyticsSiteImprove />
    <AnalyticsMonsido />
    <AuthProvider>
      <CookiesProvider>
        <TranslationsProvider>
          <ReduxProvider store={store}>
            <Router />
          </ReduxProvider>
        </TranslationsProvider>
      </CookiesProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
