import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CommunityTopic } from '../../../types';

import {
  GET_COMMUNITY_RECENT_TOPICS_REQUESTED,
  GET_COMMUNITY_POPULAR_TOPICS_REQUESTED,
  GET_COMMUNITY_TOPICS_BY_TAG_REQUESTED
} from './action-types';
import * as actions from './actions';

import {
  getRecentTopics,
  getPopularTopics,
  getTopicsByTag,
  extractTopics
} from '../../../services/api/community-api/topics';

function* getRecentTopicsRequested() {
  try {
    const data: Record<string, any> = yield call(getRecentTopics);
    if (data) {
      yield put(
        actions.getTopicsSucceeded(
          extractTopics(data) as CommunityTopic[],
          null
        )
      );
    } else {
      yield put(actions.getTopicsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getTopicsFailed(e.message));
  }
}

function* getPopularTopicsRequested() {
  try {
    const data: Record<string, any> = yield call(getPopularTopics);
    if (data) {
      yield put(
        actions.getTopicsSucceeded(
          extractTopics(data) as CommunityTopic[],
          null
        )
      );
    } else {
      yield put(actions.getTopicsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getTopicsFailed(e.message));
  }
}

function* getTopicsByTagRequested({
  payload: { tag }
}: ReturnType<typeof actions.getTopicsByTagRequested>) {
  try {
    const data: Record<string, any> = yield call(getTopicsByTag, tag);
    if (data) {
      yield put(
        actions.getTopicsSucceeded(extractTopics(data) as CommunityTopic[], tag)
      );
    } else {
      yield put(actions.getTopicsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getTopicsFailed(e.message));
  }
}

export default function* saga() {
  yield all([
    takeLatest(GET_COMMUNITY_RECENT_TOPICS_REQUESTED, getRecentTopicsRequested),
    takeLatest(
      GET_COMMUNITY_POPULAR_TOPICS_REQUESTED,
      getPopularTopicsRequested
    ),
    takeLatest(GET_COMMUNITY_TOPICS_BY_TAG_REQUESTED, getTopicsByTagRequested)
  ]);
}
