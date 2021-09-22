import { all } from 'redux-saga/effects';

import cmsPageSaga from '../../../components/with-cms-page/redux/saga';
import cmsNewsSaga from '../../../components/with-cms-news/redux/saga';
import communityCategoriesSaga from '../../../components/with-community-categories/redux/saga';
import datasetsSaga from '../../../components/with-datasets/redux/saga';
import referenceDataSaga from '../../../components/with-reference-data/redux/saga';

export default function* saga() {
  yield all([
    cmsPageSaga(),
    cmsNewsSaga(),
    communityCategoriesSaga(),
    datasetsSaga(),
    referenceDataSaga()
  ]);
}
