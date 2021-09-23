import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_COMMUNITY_CATEGORY_REQUESTED,
  GET_COMMUNITY_CATEGORY_SUCCEEDED,
  GET_COMMUNITY_CATEGORY_FAILED,
  RESET_COMMUNITY_CATEGORY
} from './action-types';

import { Actions } from '../../../types';

const initialState = fromJS({
  communityCategory: []
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_COMMUNITY_CATEGORY_REQUESTED:
      return state.set('communityCategory', null);
    case GET_COMMUNITY_CATEGORY_SUCCEEDED:
      return state.set('communityCategory', fromJS(action.payload.category));
    case GET_COMMUNITY_CATEGORY_FAILED:
      return state;
    case RESET_COMMUNITY_CATEGORY:
      return state.set('communityCategory', null);
    default:
      return state;
  }
}
