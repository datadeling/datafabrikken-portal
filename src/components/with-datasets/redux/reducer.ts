import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_DATASETS_REQUESTED,
  GET_DATASETS_SUCCEEDED,
  GET_DATASETS_FAILED,
  RESET_DATASETS,
  GET_DATASETS_RELATIONS_REQUESTED,
  GET_DATASETS_RELATIONS_SUCCEEDED,
  GET_DATASETS_RELATIONS_FAILED,
  RESET_DATASETS_RELATIONS
} from './action-types';

import type { Actions } from '../../../types';

const initialState = fromJS({
  datasetsAggregations: [],
  datasets: [],
  totalDatasets: 0,
  datasetsPage: 0,
  datasetPageSize: 0,
  hasMoreDatasets: false,
  datasetsRelations: [],
  isLoadingDatasets: false
});

export default function reducer(
  state: any = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case GET_DATASETS_REQUESTED:
      return state
        .set('datasetsAggregations', fromJS([]))
        .set('datasets', fromJS([]))
        .set('totalDatasets', 0)
        .set('totalPages', 0)
        .set('datasetsPage', 0)
        .set('datasetPageSize', 0)
        .set('hasMoreDatasets', false)
        .set('isLoadingDatasets', true);

    case GET_DATASETS_SUCCEEDED:
      return state
        .set(
          'datasetsAggregations',
          fromJS(action.payload.pagedDatasets.aggregations)
        )
        .set('datasets', fromJS(action.payload.pagedDatasets.hits))
        .set('totalDatasets', action.payload.pagedDatasets.page.totalElements)
        .set('totalPages', action.payload.pagedDatasets.page.totalPages)
        .set('datasetsPage', action.payload.pagedDatasets.page.currentPage)
        .set('datasetPageSize', action.payload.pagedDatasets.page.size)
        .set(
          'hasMoreDatasets',
          action.payload.pagedDatasets.page.currentPage + 1 <
            action.payload.pagedDatasets.page.totalPages
        )
        .set('isLoadingDatasets', false);
    case GET_DATASETS_FAILED:
      return state.set('isLoadingDatasets', false);
    case RESET_DATASETS:
      return state
        .set('datasetsAggregations', fromJS([]))
        .set('datasets', fromJS([]))
        .set('totalDatasets', 0)
        .set('totalPages', 0)
        .set('datasetsPage', 0)
        .set('datasetPageSize', 0)
        .set('hasMoreDatasets', false)
        .set('isLoadingDatasets', false);
    case GET_DATASETS_RELATIONS_REQUESTED:
      return state.set('datasetsRelations', fromJS([]));
    case GET_DATASETS_RELATIONS_SUCCEEDED:
      return state.set(
        'datasetsRelations',
        fromJS(action.payload.pagedDatasets.hits)
      );
    case GET_DATASETS_RELATIONS_FAILED:
      return state.set('datasetsRelations', fromJS([]));
    case RESET_DATASETS_RELATIONS:
      return state.set('datasetsRelations', fromJS([]));
    default:
      return state;
  }
}
