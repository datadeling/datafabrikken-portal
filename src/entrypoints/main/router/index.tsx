import React, { memo, FC, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Root from '../../../components/root';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

const isFeatureToggleActive = localStorage.getItem('DF_TOGGLE');

const routes = {
  main: lazy(() => import('./pages/main-page'))
};

const Router: FC = () => (
  <BrowserRouter>
    {isFeatureToggleActive && <Header />}
    <Root>
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' component={routes.main} />
        </Switch>
      </Suspense>
    </Root>
    {isFeatureToggleActive && <Footer />}
  </BrowserRouter>
);

export default memo(Router);
