import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_CMS_PAGE_REQUESTED,
  GET_CMS_PAGE_SUCCEEDED,
  GET_CMS_PAGE_FAILED,
  RESET_CMS_PAGE
} from './action-types';

import { Actions } from '../../../types';

const initialState = fromJS({
  page: null
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_CMS_PAGE_REQUESTED:
      return state.set('page', null);
    case GET_CMS_PAGE_SUCCEEDED:
      return state.set('page', fromJS(action.payload.page));
    case GET_CMS_PAGE_FAILED:
      return state;
    case RESET_CMS_PAGE:
      return state.set('page', null);
    default:
      return state;
  }
}
