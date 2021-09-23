import React, { memo, FC, ComponentType } from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/actions';

import type { CommunityCategory } from '../../types';

export interface Props {
  communityCategory: CommunityCategory;
  communityCategoryActions: typeof actions;
}

const withCommunityCategory = (Component: ComponentType<any>) => {
  const WrappedComponent = (props: Props) => <Component {...props} />;

  const mapStateToProps = (state: any) => ({
    communityCategory:
      state.CommunityCategoryReducer.get('communityCategory')?.toJS()
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    communityCategoryActions: bindActionCreators(actions, dispatch)
  });

  return compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    memo
  )(WrappedComponent);
};

export default withCommunityCategory;
