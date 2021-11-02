import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_DATASETS_REQUESTED,
  GET_DATASETS_RELATIONS_REQUESTED
} from './action-types';
import * as actions from './actions';

import {
  paramsToSearchBody,
  searchDatasets
} from '../../../services/api/search-fulltext-api/datasets';

import type { Dataset, EsPaged } from '../../../types';

function* getPagedDatasetsRequested({
  payload: { params = {} }
}: ReturnType<typeof actions.getPagedDatasetsRequested>) {
  try {
    const data: Record<string, any> = yield call(
      searchDatasets,
      paramsToSearchBody(params)
    );
    if (data) {
      yield put(actions.getPagedDatasetsSucceeded(data as EsPaged<Dataset>));
    } else {
      yield put(actions.getPagedDatasetsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getPagedDatasetsFailed(e.message));
  }
}

function* getDatasetsRelationsRequested({
  payload: { params = {} }
}: ReturnType<typeof actions.getDatasetsRelationsRequested>) {
  try {
    const data: Record<string, any> = yield call(
      searchDatasets,
      paramsToSearchBody(params)
    );

    if (data) {
      yield put(
        actions.getDatasetsRelationsSucceeded(data as EsPaged<Dataset>)
      );
    } else {
      yield put(actions.getDatasetsRelationsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getDatasetsRelationsFailed(e.message));
  }
}

export default function* saga() {
  yield all([
    takeLatest(GET_DATASETS_REQUESTED, getPagedDatasetsRequested),
    takeLatest(GET_DATASETS_RELATIONS_REQUESTED, getDatasetsRelationsRequested)
  ]);
}
