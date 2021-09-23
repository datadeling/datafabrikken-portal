import React, { memo, FC } from 'react';
import { compose } from 'redux';

import withCommunityTopic, {
  Props as CommunityTopicProps
} from '../../with-community-topic';

interface Props extends CommunityTopicProps {}

const CommunityTopicBreadCrumb: FC<Props> = ({ communityTopic }) => (
  <span>{communityTopic?.title ?? ''}</span>
);

export default compose<FC>(memo, withCommunityTopic)(CommunityTopicBreadCrumb);
