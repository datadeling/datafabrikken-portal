import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_COMMUNITY_CATEGORIES_REQUESTED,
  GET_COMMUNITY_CATEGORIES_SUCCEEDED,
  GET_COMMUNITY_CATEGORIES_FAILED,
  RESET_COMMUNITY_CATEGORIES
} from './action-types';

import { Actions } from '../../../types';

const initialState = fromJS({
  communityCategories: []
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_COMMUNITY_CATEGORIES_REQUESTED:
      return state.set('communityCategories', fromJS([]));
    case GET_COMMUNITY_CATEGORIES_SUCCEEDED:
      return state.set(
        'communityCategories',
        fromJS(action.payload.categories)
      );
    case GET_COMMUNITY_CATEGORIES_FAILED:
      return state;
    case RESET_COMMUNITY_CATEGORIES:
      return state.set('communityCategories', fromJS([]));
    default:
      return state;
  }
}
