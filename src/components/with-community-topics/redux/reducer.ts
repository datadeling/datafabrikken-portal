import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_COMMUNITY_RECENT_TOPICS_REQUESTED,
  GET_COMMUNITY_POPULAR_TOPICS_REQUESTED,
  GET_COMMUNITY_TOPICS_BY_TAG_REQUESTED,
  GET_COMMUNITY_TOPICS_SUCCEEDED,
  GET_COMMUNITY_TOPICS_FAILED,
  RESET_COMMUNITY_TOPICS
} from './action-types';

import { Actions } from '../../../types';

const initialState = fromJS({
  communityTopics: [],
  communityTag: ''
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_COMMUNITY_RECENT_TOPICS_REQUESTED:
    case GET_COMMUNITY_POPULAR_TOPICS_REQUESTED:
    case GET_COMMUNITY_TOPICS_BY_TAG_REQUESTED:
      return fromJS({
        communityTag: '',
        communityTopics: fromJS([])
      });
    case GET_COMMUNITY_TOPICS_SUCCEEDED:
      return fromJS({
        communityTag: action.payload.tag,
        communityTopics: fromJS(action.payload.topics)
      });

    case GET_COMMUNITY_TOPICS_FAILED:
      return state;
    case RESET_COMMUNITY_TOPICS:
      return fromJS({
        communityTag: '',
        communityTopics: fromJS([])
      });
    default:
      return state;
  }
}
