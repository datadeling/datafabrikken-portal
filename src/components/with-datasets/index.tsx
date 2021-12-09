import React, { ComponentType, FC, memo } from 'react';
import { bindActionCreators, Dispatch, compose } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/actions';

import type { Dataset } from '../../types';

export interface Props {
  datasetsAggregations: any;
  datasets: Dataset[];
  datasetsRelations: Dataset[];
  totalDatasets: number;
  totalPages: number;
  datasetsPage: number;
  datasetPageSize: number;
  hasMoreDatasets: boolean;
  datasetsActions: typeof actions;
  isLoadingDatasets: boolean;
}

const withDatasets = (Component: ComponentType<any>) => {
  const WrappedComponent = (props: Props) => <Component {...props} />;

  const mapStateToProps = (state: any) => ({
    datasetsAggregations:
      state.DatasetsReducer.get('datasetsAggregations')?.toJS() ?? [],
    datasets: state.DatasetsReducer.get('datasets')?.toJS() ?? [],
    totalDatasets: state.DatasetsReducer.get('totalDatasets'),
    totalPages: state.DatasetsReducer.get('totalPages'),
    datasetsPage: state.DatasetsReducer.get('datasetsPage'),
    datasetPageSize: state.DatasetsReducer.get('datasetPageSize'),
    hasMoreDatasets: state.DatasetsReducer.get('hasMoreDatasets'),
    datasetsRelations:
      state.DatasetsReducer.get('datasetsRelations')?.toJS() ?? [],
    isLoadingDatasets: state.DatasetsReducer.get('isLoadingDatasets')
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    datasetsActions: bindActionCreators(actions, dispatch)
  });

  return compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    memo
  )(WrappedComponent);
};

export default withDatasets;
