import React, { FC } from 'react';

import SC from './styled';

import type { CommunityTag } from '../../../types';
import { PATHNAME } from '../../../enums';

const Tag: FC<CommunityTag> = ({ value, valueEscaped }) => (
  <SC.Tag to={`${PATHNAME.COMMUNITY_TAGS}/${valueEscaped}`}>{value}</SC.Tag>
);

export default Tag;
