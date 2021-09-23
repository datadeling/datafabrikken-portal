import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_COMMUNITY_TOPIC_REQUESTED,
  GET_COMMUNITY_TOPIC_SUCCEEDED,
  GET_COMMUNITY_TOPIC_FAILED,
  RESET_COMMUNITY_TOPIC
} from './action-types';

import { Actions } from '../../../types';

const initialState = fromJS({
  communityTopic: null
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_COMMUNITY_TOPIC_REQUESTED:
      return state.set('communityTopic', null);
    case GET_COMMUNITY_TOPIC_SUCCEEDED:
      return state.set('communityTopic', fromJS(action.payload.topic));
    case GET_COMMUNITY_TOPIC_FAILED:
      return state;
    case RESET_COMMUNITY_TOPIC:
      return state.set('communityTopic', null);
    default:
      return state;
  }
}
