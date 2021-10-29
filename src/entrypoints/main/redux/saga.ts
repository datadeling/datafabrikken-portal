import { all } from 'redux-saga/effects';

import cmsPageSaga from '../../../components/with-cms-page/redux/saga';
import cmsNewsSaga from '../../../components/with-cms-news/redux/saga';
import communityCategoriesSaga from '../../../components/with-community-categories/redux/saga';
import communityCategorySaga from '../../../components/with-community-category/redux/saga';
import communityTagsSaga from '../../../components/with-community-tags/redux/saga';
import communityTopicSaga from '../../../components/with-community-topic/redux/saga';
import communitySearchSaga from '../../../components/with-community-search/redux/saga';
import communityTopicsSaga from '../../../components/with-community-topics/redux/saga';
import datasetsSaga from '../../../components/with-datasets/redux/saga';
import referenceDataSaga from '../../../components/with-reference-data/redux/saga';
import datasetSaga from '../../../components/with-dataset/redux/saga';
import publicServicesSaga from '../../../components/with-public-services/redux/saga';
import dataServicesSaga from '../../../components/with-data-services/redux/saga';
import assessmentSaga from '../../../components/with-assessment/redux/saga';
import organizationSaga from '../../../components/with-organization/redux/saga';
import organizationsCatalogSaga from '../../../components/with-organizations-catalog/redux/saga';
import reportSaga from '../../../components/with-report/redux/saga';
import organizationsSaga from '../../../components/with-organizations/redux/saga';

export default function* saga() {
  yield all([
    cmsPageSaga(),
    cmsNewsSaga(),
    communityCategoriesSaga(),
    communityCategorySaga(),
    communityTagsSaga(),
    communityTopicSaga(),
    communityTopicsSaga(),
    datasetsSaga(),
    referenceDataSaga(),
    datasetSaga(),
    publicServicesSaga(),
    dataServicesSaga(),
    assessmentSaga(),
    communitySearchSaga(),
    organizationSaga(),
    organizationsCatalogSaga(),
    reportSaga(),
    organizationsSaga()
  ]);
}
