import React, { memo, FC } from 'react';
import { compose } from 'redux';

import parse from 'html-react-parser';

import withCommunityTopics, {
  Props as CommunityTopicsProps
} from '../../with-community-topics';

interface Props extends CommunityTopicsProps {}

const CommunityTagBreadCrumb: FC<Props> = ({ communityTag }) => (
  <span>
    {communityTag &&
      parse(`${communityTag[0].toUpperCase()}${communityTag.slice(1)}`)}
  </span>
);

export default compose<FC>(memo, withCommunityTopics)(CommunityTagBreadCrumb);
