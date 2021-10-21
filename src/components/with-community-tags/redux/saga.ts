import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CommunityTag } from '../../../types';

import { GET_COMMUNITY_TAGS_REQUESTED } from './action-types';
import * as actions from './actions';

import { getTags, extractTags } from '../../../services/api/community-api/tags';

function* getTagsRequested() {
  try {
    const data: Record<string, any> = yield call(getTags);
    if (data) {
      yield put(actions.getTagsSucceeded(extractTags(data) as CommunityTag[]));
    } else {
      yield put(actions.getTagsFailed(''));
    }
  } catch (e: any) {
    yield put(actions.getTagsFailed(e.message));
  }
}

export default function* saga() {
  yield all([takeLatest(GET_COMMUNITY_TAGS_REQUESTED, getTagsRequested)]);
}
