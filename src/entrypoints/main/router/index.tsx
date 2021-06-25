import React, { memo, FC, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PATHNAME } from '../../../enums';

import Breadcrumbs from '../../../components/breadcrumbs';
import Header from '../../../components/header';

const routes = {
  [PATHNAME.MAIN]: lazy(() => import('./pages/main-page')),
  [PATHNAME.ABOUT]: lazy(() => import('./pages/article-page')),
  [PATHNAME.FIND_DATA]: lazy(() => import('./pages/find-data-page')),
  [PATHNAME.DATASETS]: lazy(() => import('./pages/datasets-page')),
  [PATHNAME.NEWS]: lazy(() => import('./pages/news-page')),
  NEWS_ARTICLE: lazy(() => import('./pages/news-article-page')),
  [PATHNAME.DATA_COMMUNITY]: lazy(() => import('./pages/article-page')),
  [PATHNAME.DATA_SOURCES]: lazy(() => import('./pages/article-page')),
  [PATHNAME.GUIDEANCE_AND_COMPETENCE]: lazy(
    () => import('./pages/article-page')
  ),
  [PATHNAME.CONTACT]: lazy(() => import('./pages/contact-page')),
  ARTICLE: lazy(() => import('./pages/article-page'))
};

const Router: FC = () => (
  <BrowserRouter>
    <Header />
    <Breadcrumbs />
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={PATHNAME.MAIN} component={routes[PATHNAME.MAIN]} />
        <Route exact path={PATHNAME.ABOUT} component={routes[PATHNAME.ABOUT]} />
        <Route
          exact
          path={PATHNAME.FIND_DATA}
          component={routes[PATHNAME.FIND_DATA]}
        />
        <Route
          exact
          path={`${PATHNAME.FIND_DATA}${PATHNAME.DATASETS}`}
          component={routes[PATHNAME.DATASETS]}
        />
        <Route
          exact
          path={`${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}`}
          component={routes[PATHNAME.DATA_SOURCES]}
        />
        <Route
          exact
          path={`${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}${PATHNAME.PRIVATE_SECTOR}`}
          component={routes.ARTICLE}
        />
        <Route
          exact
          path={`${PATHNAME.FIND_DATA}${PATHNAME.GUIDEANCE_AND_COMPETENCE}`}
          component={routes[PATHNAME.GUIDEANCE_AND_COMPETENCE]}
        />
        <Route
          exact
          path={`${PATHNAME.FIND_DATA}${PATHNAME.GUIDEANCE_AND_COMPETENCE}${PATHNAME.LEGAL_FRAMEWORK}`}
          component={routes.ARTICLE}
        />
        <Route exact path={PATHNAME.NEWS} component={routes[PATHNAME.NEWS]} />
        <Route
          exact
          path={`${PATHNAME.NEWS}/:newsArticleId`}
          component={routes.NEWS_ARTICLE}
        />
        <Route
          exact
          path={PATHNAME.CONTACT}
          component={routes[PATHNAME.CONTACT]}
        />
        <Route
          exact
          path={PATHNAME.DATA_COMMUNITY}
          component={routes[PATHNAME.DATA_COMMUNITY]}
        />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default memo(Router);
