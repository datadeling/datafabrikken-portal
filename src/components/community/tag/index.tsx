import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import SC from './styled';

import type { CommunityTag } from '../../../types';
import { PATHNAME } from '../../../enums';

const Tag: FC<CommunityTag> = ({ value, valueEscaped }) => (
  <Link to={`${PATHNAME.COMMUNITY_TAGS}/${valueEscaped}`}>
    <SC.Tag>{value}</SC.Tag>
  </Link>
);

export default Tag;
