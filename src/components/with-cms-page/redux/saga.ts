import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_CMS_NEWS_ARTICLE_REQUESTED,
  GET_CMS_PAGE_REQUESTED
} from './action-types';
import * as actions from './actions';

import {
  getPageEntity,
  extractPageData
} from '../../../services/api/cms-api/page';

import { getNewsPage, extractData } from '../../../services/api/cms-api/news';

import type { CmsArticle } from '../../../types';

function* getCmsPageRequested({
  payload: { id }
}: ReturnType<typeof actions.getCmsPageRequested>) {
  try {
    const data: Record<string, any> = yield call(getPageEntity, id);

    if (data) {
      yield put(
        actions.getCmsPageSucceeded(extractPageData(data) as CmsArticle)
      );
    } else {
      yield put(actions.getCmsPageFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getCmsPageFailed(e.message));
  }
}

function* getCmsNewsArticleRequested({
  payload: { id }
}: ReturnType<typeof actions.getCmsNewsArticleRequested>) {
  try {
    const data: Record<string, any> = yield call(getNewsPage, id);

    if (data) {
      yield put(actions.getCmsPageSucceeded(extractData(data) as CmsArticle));
    } else {
      yield put(actions.getCmsPageFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getCmsPageFailed(e.message));
  }
}

export default function* saga() {
  yield all([
    takeLatest(GET_CMS_PAGE_REQUESTED, getCmsPageRequested),
    takeLatest(GET_CMS_NEWS_ARTICLE_REQUESTED, getCmsNewsArticleRequested)
  ]);
}
