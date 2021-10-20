import React, { memo, FC, ComponentType } from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/actions';

import type { CmsArticle } from '../../types';

export interface Props {
  cmsNews: CmsArticle[];
  cmsNewsActions: typeof actions;
}

const withCmsNews = (Component: ComponentType<any>) => {
  const WrappedComponent = (props: Props) => <Component {...props} />;

  const mapStateToProps = (state: any) => ({
    cmsNews: state.CmsNewsReducer.get('cmsNews')?.toJS()
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    cmsNewsActions: bindActionCreators(actions, dispatch)
  });

  return compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    memo
  )(WrappedComponent);
};

export default withCmsNews;
