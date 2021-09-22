import React, { memo, FC } from 'react';
import { compose } from 'redux';

import withDataset, { Props as CmsPageProps } from '../../with-cms-page';

interface Props extends CmsPageProps {}

const ArticleBreadcrumb: FC<Props> = ({ cmsPage }) => (
  <span>{cmsPage?.title ?? ''}</span>
);

export default compose<FC>(memo, withDataset)(ArticleBreadcrumb);
