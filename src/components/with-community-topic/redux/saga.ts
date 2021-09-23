import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CommunityTopic } from '../../../types';

import { GET_COMMUNITY_TOPIC_REQUESTED } from './action-types';
import * as actions from './actions';

import { getTopic } from '../../../services/api/community-api/topic';

function* getTopicRequested({
  payload: { slug }
}: ReturnType<typeof actions.getTopicRequested>) {
  try {
    const data: Record<string, any> = yield call(getTopic, slug);
    if (data) {
      yield put(actions.getTopicSucceeded(data as CommunityTopic));
    } else {
      yield put(actions.getTopicFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getTopicFailed(e.message));
  }
}

export default function* saga() {
  yield all([takeLatest(GET_COMMUNITY_TOPIC_REQUESTED, getTopicRequested)]);
}
