import React, { memo, FC, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PATHNAME } from '../../../enums';

import Header from '../../../components/header';

const isFeatureToggleActive = localStorage.getItem('DF_TOGGLE');

const routes = {
  [PATHNAME.MAIN]: lazy(() => import('./pages/main-page')),
  [PATHNAME.DATASETS]: lazy(() => import('./pages/datasets-page')),
  [PATHNAME.ABOUT]: lazy(() => import('./pages/article-page')),
  [PATHNAME.COMPETENCE_AND_GUIDANCE]: lazy(
    () => import('./pages/find-data-page')
  )
};

const Router: FC = () => (
  <BrowserRouter>
    {isFeatureToggleActive && <Header />}
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={PATHNAME.MAIN} component={routes[PATHNAME.MAIN]} />
        <Route
          path={`${PATHNAME.COMPETENCE_AND_GUIDANCE}${PATHNAME.DATASETS}`}
          component={routes[PATHNAME.DATASETS]}
        />
        <Route path={PATHNAME.ABOUT} component={routes[PATHNAME.ABOUT]} />
        <Route
          path={PATHNAME.COMPETENCE_AND_GUIDANCE}
          component={routes[PATHNAME.COMPETENCE_AND_GUIDANCE]}
        />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default memo(Router);
