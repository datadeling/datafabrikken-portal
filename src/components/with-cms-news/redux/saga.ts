import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET_CMS_NEWS_REQUESTED } from './action-types';
import * as actions from './actions';

import { getNews, extractData } from '../../../services/api/cms-api/news';

import type { CmsArticle } from '../../../types';

function* getNewsRequested({
  payload: {
    params: { pageLimit }
  }
}: ReturnType<typeof actions.getNewsRequested>) {
  try {
    const data: Record<string, any> = yield call(getNews, pageLimit);
    if (data) {
      yield put(actions.getNewsSucceeded(extractData(data) as CmsArticle[]));
    } else {
      yield put(actions.getNewsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getNewsFailed(e.message));
  }
}

export default function* saga() {
  yield all([takeLatest(GET_CMS_NEWS_REQUESTED, getNewsRequested)]);
}
