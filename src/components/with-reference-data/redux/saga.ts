import { all, call, put, takeEvery } from 'redux-saga/effects';

import { GET_REFERENCE_DATA_REQUESTED } from './action-types';
import * as actions from './actions';

import { getReferenceData } from '../../../services/api/reference-data/reference-data';

import type { ReferenceData } from '../../../types';

function* getReferenceDataRequested({
  payload: { category }
}: ReturnType<typeof actions.getReferenceDataRequested>) {
  try {
    const pathMapping = {
      referenceTypes: 'reference-types'
    };

    const data: ReferenceData = yield call(
      getReferenceData,
      pathMapping[category]
    );

    if (data) {
      yield put(actions.getReferenceDataSucceeded(category, data));
    } else {
      yield put(actions.getReferenceDataFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getReferenceDataFailed(e.message));
  }
}

export default function* saga() {
  yield all([
    takeEvery(GET_REFERENCE_DATA_REQUESTED, getReferenceDataRequested)
  ]);
}
