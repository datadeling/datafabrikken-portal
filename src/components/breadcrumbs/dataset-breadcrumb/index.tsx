import React, { memo, FC } from 'react';
import { compose } from 'redux';

import Translation from '../../translation';

import withDataset, { Props as DatasetProps } from '../../with-dataset';

interface Props extends DatasetProps {}

const DatasetBreadcrumb: FC<Props> = ({ dataset }) => (
  <span>
    {dataset ? (
      <Translation text={dataset?.title} />
    ) : (
      <Translation id='errorPage.pageNotFound' />
    )}
  </span>
);

export default compose<FC>(memo, withDataset)(DatasetBreadcrumb);
