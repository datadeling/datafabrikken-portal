import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CommunityCategory } from '../../../types';

import { GET_COMMUNITY_CATEGORY_REQUESTED } from './action-types';
import * as actions from './actions';

import { getCategory } from '../../../services/api/community-api/category';

function* getCategoryRequested({
  payload: { slug, page, sort }
}: ReturnType<typeof actions.getCategoryRequested>) {
  try {
    const data: Record<string, any> = yield call(getCategory, slug, page, sort);
    if (data) {
      yield put(actions.getCategorySucceeded(data as CommunityCategory));
    } else {
      yield put(actions.getCategoryFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getCategoryFailed(e.message));
  }
}

export default function* saga() {
  yield all([
    takeLatest(GET_COMMUNITY_CATEGORY_REQUESTED, getCategoryRequested)
  ]);
}
