import React, { memo, FC, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Root from '../../../components/root';

const routes = {
  main: lazy(() => import('./pages/main-page'))
};

const Router: FC = () => (
  <BrowserRouter>
    <Root>
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' component={routes.main} />
        </Switch>
      </Suspense>
    </Root>
  </BrowserRouter>
);

export default memo(Router);
