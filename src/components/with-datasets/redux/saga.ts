import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET_DATASETS_REQUESTED } from './action-types';
import * as actions from './actions';

import {
  paramsToSearchBody,
  searchDatasets
} from '../../../services/api/search-fulltext-api/datasets';

import type { Dataset, Paged } from '../../../types';

function* getPagedDatasetsRequested({
  payload: {
    params: { page, q, opendata, losTheme, theme, accessRights, format } = {}
  }
}: ReturnType<typeof actions.getPagedDatasetsRequested>) {
  try {
    const data: Record<string, any> = yield call(
      searchDatasets,
      paramsToSearchBody({
        page,
        q,
        opendata,
        losTheme,
        theme,
        accessRights,
        format
      })
    );
    if (data) {
      yield put(actions.getPagedDatasetsSucceeded(data as Paged<Dataset>));
    } else {
      yield put(actions.getPagedDatasetsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getPagedDatasetsFailed(e.message));
  }
}

export default function* saga() {
  yield all([takeLatest(GET_DATASETS_REQUESTED, getPagedDatasetsRequested)]);
}
