import React, { FC } from 'react';

import SC from './styled';

import type { CommunityTag } from '../../../types';
import env from '../../../env';

const { COMMUNITY_API_HOST } = env;

const Tag: FC<CommunityTag> = ({ value, valueEscaped }) => (
  <SC.Tag href={`${COMMUNITY_API_HOST}/tags/${valueEscaped}`}>{value}</SC.Tag>
);

export default Tag;
