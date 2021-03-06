import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_ASSESSMENT_REQUESTED,
  GET_CATALOG_RATING_REQUESTED
} from './action-types';
import * as actions from './actions';

import type { Assessment, Rating } from '../../../types';
import env from '../../../env';

function* getAssessmentRequested({
  payload: { id }
}: ReturnType<typeof actions.getAssessmentRequested>) {
  try {
    const { data } = yield call(
      axios.get,
      `${env.METADATA_QUALITY_ASSESSMENT_API}/assessments/entities/${id}`
    );

    if (data) {
      yield put(actions.getAssessmentSucceeded(data as Assessment));
    } else {
      yield put(actions.getAssessmentFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getAssessmentFailed(e.message));
  }
}

function* getCatalogRatingRequested({
  payload: { catalogId, entityType, contexts }
}: ReturnType<typeof actions.getCatalogRatingRequested>) {
  try {
    const { data } = yield call(
      axios.get,
      `${env.METADATA_QUALITY_ASSESSMENT_API}/rating/catalog`,
      {
        params: {
          catalogId,
          entityType,
          contexts
        }
      }
    );

    if (data) {
      yield put(actions.getCatalogRatingSucceeded(data as Rating));
    } else {
      yield put(actions.getCatalogRatingFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getCatalogRatingFailed(e.message));
  }
}

export default function* saga() {
  yield all([
    takeLatest(GET_ASSESSMENT_REQUESTED, getAssessmentRequested),
    takeLatest(GET_CATALOG_RATING_REQUESTED, getCatalogRatingRequested)
  ]);
}
