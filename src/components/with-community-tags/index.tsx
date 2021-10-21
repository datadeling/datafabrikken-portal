import React, { memo, FC, ComponentType } from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/actions';

import type { CommunityTag } from '../../types';

export interface Props {
  communityTags: CommunityTag[];
  communityTagsActions: typeof actions;
}

const withCommunityTags = (Component: ComponentType<any>) => {
  const WrappedComponent = (props: Props) => <Component {...props} />;

  const mapStateToProps = (state: any) => ({
    communityTags: state.CommunityTagsReducer.get('communityTags').toJS()
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    communityTagsActions: bindActionCreators(actions, dispatch)
  });

  return compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    memo
  )(WrappedComponent);
};

export default withCommunityTags;
