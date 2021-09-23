import React, { FC } from 'react';

import SC from './styled';

import type { CommunityTag } from '../../../types';
import env from '../../../env';

const { COMMUNITY_API_HOST } = env;

const Tag: FC<CommunityTag> = ({ value, valueEscaped }) => (
  <a href={`${COMMUNITY_API_HOST}/tags/${valueEscaped}`}>
    <SC.Tag>{value}</SC.Tag>
  </a>
);

export default Tag;
