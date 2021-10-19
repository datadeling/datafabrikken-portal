import React, { memo, FC, ComponentType } from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/actions';
import { PublicService, ESPage } from '../../types';

export interface Props {
  publicServices: PublicService[];
  publicServicesAggregations: any;
  publicServicesPage: ESPage;
  publicServicesActions: typeof actions;
  publicServicesRequiredBy: PublicService[];
  publicServicesRelatedBy: PublicService[];
  publicServicesRelations: PublicService[];
}

const withPublicServices = (Component: ComponentType<any>) => {
  const WrappedComponent = (props: Props) => <Component {...props} />;

  const mapStateToProps = (state: any) => ({
    publicServicesRelations: state.PublicServicesReducer.get(
      'publicServicesRelations'
    )?.toJS()
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    publicServicesActions: bindActionCreators(actions, dispatch)
  });

  return compose<FC>(
    memo,
    connect(mapStateToProps, mapDispatchToProps)
  )(WrappedComponent);
};

export default withPublicServices;
