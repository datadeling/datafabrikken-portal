import { all } from 'redux-saga/effects';

import cmsPageSaga from '../../../components/with-cms-page/redux/saga';
import cmsNewsSaga from '../../../components/with-cms-news/redux/saga';
import communityCategoriesSaga from '../../../components/with-community-categories/redux/saga';
import communityCategorySaga from '../../../components/with-community-category/redux/saga';
import communityTopicSaga from '../../../components/with-community-topic/redux/saga';
import datasetsSaga from '../../../components/with-datasets/redux/saga';
import referenceDataSaga from '../../../components/with-reference-data/redux/saga';
import datasetSaga from '../../../components/with-dataset/redux/saga';
import assessmentSaga from '../../../components/with-assessment/redux/saga';

export default function* saga() {
  yield all([
    cmsPageSaga(),
    cmsNewsSaga(),
    communityCategoriesSaga(),
    communityCategorySaga(),
    communityTopicSaga(),
    datasetsSaga(),
    referenceDataSaga(),
    datasetSaga(),
    assessmentSaga()
  ]);
}
