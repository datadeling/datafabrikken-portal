import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CommunityCategory } from '../../../types';

import { GET_COMMUNITY_CATEGORIES_REQUESTED } from './action-types';
import * as actions from './actions';

import {
  getCategories,
  extractCategories
} from '../../../services/api/community-api/categories';

function* getCategoriesRequested() {
  try {
    const data: Record<string, any> = yield call(getCategories);
    if (data) {
      yield put(
        actions.getCategoriesSucceeded(
          extractCategories(data) as CommunityCategory[]
        )
      );
    } else {
      yield put(actions.getCategoriesFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getCategoriesFailed(e.message));
  }
}

export default function* saga() {
  yield all([
    takeLatest(GET_COMMUNITY_CATEGORIES_REQUESTED, getCategoriesRequested)
  ]);
}
