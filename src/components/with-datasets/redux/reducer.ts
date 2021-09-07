import { fromJS } from 'immutable';

import * as actions from './actions';
import {
  GET_DATASETS_REQUESTED,
  GET_DATASETS_SUCCEEDED,
  GET_DATASETS_FAILED,
  RESET_DATASETS
} from './action-types';

import type { Actions } from '../../../types';

const initialState = fromJS({
  datasetsAggregations: [],
  datasets: [],
  totalDatasets: 0,
  datasetsPage: 0,
  datasetPageSize: 0,
  hasMoreDatasets: false
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
        .set('datasetsPage', 0)
        .set('datasetPageSize', 0)
        .set('hasMoreDatasets', false);
    case GET_DATASETS_SUCCEEDED:
      return state
        .set(
          'datasetsAggregations',
          fromJS(action.payload.pagedDatasets.aggregations)
        )
        .set('datasets', fromJS(action.payload.pagedDatasets.hits))
        .set('totalDatasets', action.payload.pagedDatasets.page.totalElements)
        .set('datasetsPage', action.payload.pagedDatasets.page.currentPage)
        .set('datasetPageSize', action.payload.pagedDatasets.page.size)
        .set(
          'hasMoreDatasets',
          action.payload.pagedDatasets.page.currentPage + 1 <
            action.payload.pagedDatasets.page.totalPages
        );
    case GET_DATASETS_FAILED:
      return state.set('isLoadingDatasets', false);
    case RESET_DATASETS:
      return state
        .set('datasetsAggregations', fromJS([]))
        .set('datasets', fromJS([]))
        .set('totalDatasets', 0)
        .set('datasetsPage', 0)
        .set('datasetPageSize', 0)
        .set('hasMoreDatasets', false);
    default:
      return state;
  }
}
