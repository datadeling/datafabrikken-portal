import React, { memo, FC, ComponentType } from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/actions';

import type { CommunityTopic } from '../../types';

export interface Props {
  communityTag: string;
  communityTopics: CommunityTopic[];
  communityTopicsActions: typeof actions;
}

const withCommunityTopics = (Component: ComponentType<any>) => {
  const WrappedComponent = (props: Props) => <Component {...props} />;

  const mapStateToProps = (state: any) => ({
    communityTopics: state.CommunityTopicsReducer.get('communityTopics').toJS(),
    communityTag: state.CommunityTopicsReducer.get('communityTag')
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    communityTopicsActions: bindActionCreators(actions, dispatch)
  });

  return compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    memo
  )(WrappedComponent);
};

export default withCommunityTopics;
