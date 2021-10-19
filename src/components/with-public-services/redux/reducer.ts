import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_PUBLIC_SERVICES_RELATIONS_REQUESTED,
  GET_PUBLIC_SERVICES_RELATIONS_SUCCEEDED,
  GET_PUBLIC_SERVICES_RELATIONS_FAILED,
  RESET_PUBLIC_SERVICES_RELATIONS
} from './action-types';
import { Actions } from '../../../types';

const initialState = fromJS({
  publicServices: [],
  publicServicesAggregations: null,
  publicServicesPage: null,
  publicServicesRequiredBy: [],
  publicServicesRelatedBy: [],
  publicServicesRelations: []
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_PUBLIC_SERVICES_RELATIONS_REQUESTED:
      return state.set('publicServicesRelations', fromJS([]));
    case GET_PUBLIC_SERVICES_RELATIONS_SUCCEEDED:
      return state.set(
        'publicServicesRelations',
        fromJS(action.payload.publicServiceData)
      );
    case GET_PUBLIC_SERVICES_RELATIONS_FAILED:
      return state.set('publicServicesRelations', fromJS([]));
    case RESET_PUBLIC_SERVICES_RELATIONS:
      return state.set('publicServicesRelations', fromJS([]));
    default:
      return state;
  }
}
