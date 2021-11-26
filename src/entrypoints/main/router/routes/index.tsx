import React, { memo, FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHNAME } from '../../../../enums';
import env from '../../../../env';
import { Environment } from '../../../../types/enums';

import ErrorPage from '../../../../components/error-page';

const { ENV } = env;

const routes = {
  [PATHNAME.MAIN]: lazy(() => import('../pages/main-page')),
  [PATHNAME.ABOUT]: lazy(() => import('../pages/article-page')),
  [PATHNAME.FIND_DATA]: lazy(() => import('../pages/datasets-page')),
  [PATHNAME.NEWS]: lazy(() => import('../pages/news-page')),
  NEWS_ARTICLE: lazy(() => import('../pages/news-article-page')),
  [PATHNAME.COMMUNITY]: lazy(
    () => import('../pages/community-categories-page')
  ),
  [PATHNAME.COMMUNITY_TAGS]: lazy(() => import('../pages/community-tags-page')),
  COMMUNITY_TOPIC: lazy(() => import('../pages/community-topic-page')),
  COMMUNITY_TOPICS: lazy(() => import('../pages/community-topics-page')),
  [PATHNAME.COMMUNITY_ABOUT]: lazy(() => import('../pages/article-page')),
  [PATHNAME.DATA_SOURCES]: lazy(() => import('../pages/article-page')),
  [PATHNAME.GUIDEANCE_AND_COMPETENCE]: lazy(
    () => import('../pages/article-page')
  ),
  [PATHNAME.CONTACT]: lazy(() => import('../pages/contact-page')),
  ARTICLE: lazy(() => import('../pages/article-page')),
  [PATHNAME.DATASET_DETAILS]: lazy(
    () => import('../pages/details-page-dataset')
  ),
  [PATHNAME.TEXT_FORMAT]: lazy(() => import('../pages/article-page')),
  [PATHNAME.ORGANIZATION]: lazy(() => import('../pages/organization-page')),
  ORGANIZATIONS: lazy(() => import('../pages/organizations-page')),
  [PATHNAME.METADATAQUALITY]: lazy(
    () => import('../pages/metadata-quality-datasets-page')
  ),
  METADATAQUALITY_DATASET: lazy(
    () => import('../pages/metadata-quality-dataset-page')
  ),
  [PATHNAME.COURSES]: lazy(() => import('../pages/courses-page'))
};

const Routes: FC = () => (
  <Switch>
    <Route exact path={PATHNAME.MAIN} component={routes[PATHNAME.MAIN]} />
    <Route exact path={PATHNAME.ABOUT} component={routes[PATHNAME.ABOUT]} />
    <Route
      exact
      path={`${PATHNAME.FIND_DATA}`}
      component={routes[PATHNAME.FIND_DATA]}
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
      path={PATHNAME.COMMUNITY}
      component={routes[PATHNAME.COMMUNITY]}
    />
    <Route
      exact
      path={`${PATHNAME.FIND_DATA}${PATHNAME.DATASET_DETAILS}/:datasetId`}
      component={routes[PATHNAME.DATASET_DETAILS]}
    />
    <Route
      exact
      path={PATHNAME.COMMUNITY_TAGS}
      component={routes[PATHNAME.COMMUNITY_TAGS]}
    />
    <Route
      exact
      path={[
        `${PATHNAME.COMMUNITY}/:categorySlugId/:categorySlugTitle`,
        PATHNAME.COMMUNITY_POPULAR,
        PATHNAME.COMMUNITY_RECENT,
        `${PATHNAME.COMMUNITY_TAGS}/:tag`
      ]}
      component={routes.COMMUNITY_TOPICS}
    />
    <Route
      exact
      path={`${PATHNAME.COMMUNITY}/:categorySlugId/:categorySlugTitle/:topicSlugId/:topicSlugTitle`}
      component={routes.COMMUNITY_TOPIC}
    />
    <Route
      exact
      path={PATHNAME.COMMUNITY_ABOUT}
      component={routes[PATHNAME.COMMUNITY_ABOUT]}
    />
    <Route
      exact
      path={`${PATHNAME.ORGANIZATION}`}
      component={routes.ORGANIZATIONS}
    />
    <Route
      exact
      path={`${PATHNAME.ORGANIZATION}/:organizationId${PATHNAME.METADATAQUALITY}`}
      component={routes[PATHNAME.METADATAQUALITY]}
    />
    <Route
      exact
      path={`${PATHNAME.ORGANIZATION}/:organizationId${PATHNAME.METADATAQUALITY}/:datasetId`}
      component={routes.METADATAQUALITY_DATASET}
    />
    <Route
      exact
      path={`${PATHNAME.ORGANIZATION}/:organizationId/`}
      component={routes[PATHNAME.ORGANIZATION]}
    />
    {(ENV === Environment.DEVELOPMENT || ENV === Environment.STAGING) && (
      <Route
        exact
        path={PATHNAME.TEXT_FORMAT}
        component={routes[PATHNAME.TEXT_FORMAT]}
      />
    )}
    <Route
      exact
      path={`${PATHNAME.COURSES}`}
      component={routes[PATHNAME.COURSES]}
    />
    <Route render={() => <ErrorPage errorCode='404' />} />
  </Switch>
);

export default memo(Routes);
