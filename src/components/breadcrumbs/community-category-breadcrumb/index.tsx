import React, { memo, FC } from 'react';
import { compose } from 'redux';

import withCommunityCategory, {
  Props as CommunityCategoryProps
} from '../../with-community-category';

interface Props extends CommunityCategoryProps {}

const CommunityCategoryBreadCrumb: FC<Props> = ({ communityCategory }) => (
  <span>{communityCategory?.name ?? ''}</span>
);

export default compose<FC>(
  memo,
  withCommunityCategory
)(CommunityCategoryBreadCrumb);
