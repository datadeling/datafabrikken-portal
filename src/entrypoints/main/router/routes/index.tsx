import React, { memo, FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHNAME } from '../../../../enums';

const routes = {
  [PATHNAME.MAIN]: lazy(() => import('../pages/main-page')),
  [PATHNAME.ABOUT]: lazy(() => import('../pages/article-page')),
  [PATHNAME.FIND_DATA]: lazy(() => import('../pages/find-data-page')),
  [PATHNAME.DATASETS]: lazy(() => import('../pages/datasets-page')),
  [PATHNAME.NEWS]: lazy(() => import('../pages/news-page')),
  NEWS_ARTICLE: lazy(() => import('../pages/news-article-page')),
  [PATHNAME.COMMUNITY]: lazy(
    () => import('../pages/community-categories-page')
  ),
  COMMUNITY_CATEGORY: lazy(() => import('../pages/community-category-page')),
  [PATHNAME.COMMUNITY_ABOUT]: lazy(() => import('../pages/article-page')),
  [PATHNAME.DATA_SOURCES]: lazy(() => import('../pages/article-page')),
  [PATHNAME.GUIDEANCE_AND_COMPETENCE]: lazy(
    () => import('../pages/article-page')
  ),
  [PATHNAME.CONTACT]: lazy(() => import('../pages/contact-page')),
  ARTICLE: lazy(() => import('../pages/article-page'))
};

const Routes: FC = () => (
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
    <Route exact path={PATHNAME.CONTACT} component={routes[PATHNAME.CONTACT]} />
    <Route
      exact
      path={[PATHNAME.COMMUNITY]}
      component={routes[PATHNAME.COMMUNITY]}
    />
    <Route
      exact
      path={`${PATHNAME.COMMUNITY}/:categoryId`}
      component={routes.COMMUNITY_CATEGORY}
    />
    <Route
      exact
      path={PATHNAME.COMMUNITY_ABOUT}
      component={routes[PATHNAME.COMMUNITY_ABOUT]}
    />
  </Switch>
);

export default memo(Routes);
