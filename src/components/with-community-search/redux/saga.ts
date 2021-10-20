import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SEARCH_TOPICS_REQUESTED } from './action-types';
import * as actions from './actions';

import type { CommunityPost, CommunityTopic } from '../../../types';
import {
  searchCommunity,
  extractTopicsFromSearch,
  getTopicById
} from '../../../services/api/community-api/search';

function* searchTopicsRequested({
  payload: { queryTerm }
}: ReturnType<typeof actions.searchTopicsRequested>) {
  try {
    const postHits: CommunityPost[] = yield call(searchCommunity, queryTerm);
    const topics: CommunityTopic[] = (
      (yield all(
        extractTopicsFromSearch(postHits).map(({ tid }) =>
          call(getTopicById, tid)
        )
      )) as CommunityTopic[]
    ).filter(Boolean);

    if (topics.length > 0) {
      yield put(actions.searchTopicsSucceeded(topics));
    } else {
      yield put(actions.searchTopicsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.searchTopicsFailed(e.message));
  }
}

export default function* saga() {
  yield all([takeLatest(SEARCH_TOPICS_REQUESTED, searchTopicsRequested)]);
}
