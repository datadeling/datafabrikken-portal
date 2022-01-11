import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import GlobalStyles from './styles';
import { defaultTheme as theme } from './theme';

import Router from '../router';
import TranslationsProvider from '../../../providers/translations';

import store from '../redux/store';

import AuthProvider from '../../../providers/auth';
import env from '../../../env';

const { STRAPI_API_HOST } = env;

const client = new ApolloClient({
  uri: `${STRAPI_API_HOST}/graphql`,
  cache: new InMemoryCache()
});

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <CookiesProvider>
        <TranslationsProvider>
          <ApolloProvider client={client}>
            <ReduxProvider store={store}>
              <Router />
            </ReduxProvider>
          </ApolloProvider>
        </TranslationsProvider>
      </CookiesProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
