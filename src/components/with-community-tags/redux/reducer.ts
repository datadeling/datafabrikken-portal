import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_COMMUNITY_TAGS_REQUESTED,
  GET_COMMUNITY_TAGS_SUCCEEDED,
  GET_COMMUNITY_TAGS_FAILED,
  RESET_COMMUNITY_TAGS
} from './action-types';

import { Actions } from '../../../types';

const initialState = fromJS({
  communityTags: []
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_COMMUNITY_TAGS_REQUESTED:
      return state.set('communityTags', fromJS([]));
    case GET_COMMUNITY_TAGS_SUCCEEDED:
      return state.set('communityTags', fromJS(action.payload.tags));
    case GET_COMMUNITY_TAGS_FAILED:
      return state;
    case RESET_COMMUNITY_TAGS:
      return state.set('communityTags', fromJS([]));
    default:
      return state;
  }
}
