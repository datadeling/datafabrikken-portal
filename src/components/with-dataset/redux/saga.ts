import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET_DATASET_REQUESTED } from './action-types';
import * as actions from './actions';
import {
  searchDatasets,
  paramsToSearchBody,
  extractFirstDataset
} from '../../../services/api/search-fulltext-api/datasets';

function* getDatasetRequested({
  payload: { id }
}: ReturnType<typeof actions.getDatasetRequested>) {
  try {
    const params = paramsToSearchBody({ id });
    const data: Record<string, any> = yield call(searchDatasets, params);
    const dataset = extractFirstDataset(data);

    if (dataset) {
      yield put(actions.getDatasetSucceeded(dataset));
    } else {
      yield put(actions.getDatasetFailed(''));
    }
  } catch (error: any) {
    yield put(actions.getDatasetFailed(error.message));
  }
}

export default function* saga() {
  yield all([takeLatest(GET_DATASET_REQUESTED, getDatasetRequested)]);
}
