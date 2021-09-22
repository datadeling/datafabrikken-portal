import React, { memo, FC, ComponentType } from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/actions';

import type { CommunityCategory } from '../../types';

export interface Props {
  communityCategories: CommunityCategory[];
  communityCategoriesActions: typeof actions;
}

const withCommunityCategories = (Component: ComponentType<any>) => {
  const WrappedComponent = (props: Props) => <Component {...props} />;

  const mapStateToProps = (state: any) => ({
    communityCategories: state.CommunityCategoriesReducer.get(
      'communityCategories'
    ).toJS()
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    communityCategoriesActions: bindActionCreators(actions, dispatch)
  });

  return compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    memo
  )(WrappedComponent);
};

export default withCommunityCategories;
