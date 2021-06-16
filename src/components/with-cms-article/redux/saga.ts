import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET_CMS_ARTICLE_REQUESTED } from './action-types';
import * as actions from './actions';

import {
  getArticleEntity,
  extractArticleData
} from '../../../services/api/cms-api/articles';

import type { CmsArticle } from '../../../types';

function* getCmsArticleRequested({
  payload: { id }
}: ReturnType<typeof actions.getCmsArticleRequested>) {
  try {
    const data: Record<string, any> = yield call(getArticleEntity, id);

    if (data) {
      yield put(
        actions.getCmsArticleSucceeded(extractArticleData(data) as CmsArticle)
      );
    } else {
      yield put(actions.getCmsArticleFailed(''));
    }
  } catch (e) {
    yield put(actions.getCmsArticleFailed(e.message));
  }
}

export default function* saga() {
  yield all([takeLatest(GET_CMS_ARTICLE_REQUESTED, getCmsArticleRequested)]);
}