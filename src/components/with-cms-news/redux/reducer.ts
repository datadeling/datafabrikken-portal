import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_CMS_NEWS_REQUESTED,
  GET_CMS_NEWS_SUCCEEDED,
  GET_CMS_NEWS_FAILED,
  RESET_CMS_NEWS
} from './action-types';

import { Actions } from '../../../types';

const initialState = fromJS({
  cmsNews: []
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_CMS_NEWS_REQUESTED:
      return state.set('cmsNews', fromJS([]));
    case GET_CMS_NEWS_SUCCEEDED:
      return state.set('cmsNews', fromJS(action.payload.news));
    case GET_CMS_NEWS_FAILED:
      return state;
    case RESET_CMS_NEWS:
      return state.set('cmsNews', []);
    default:
      return state;
  }
}
