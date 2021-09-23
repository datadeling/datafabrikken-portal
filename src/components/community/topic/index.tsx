import React, { FC } from 'react';

import Translation from '../../translation';
import env from '../../../env';

import Tag from '../tag';
import User from '../user';

import SC from './styled';
import type { CommunityTopic } from '../../../types';

const { COMMUNITY_API_HOST } = env;

interface Props {
  topic: CommunityTopic;
}

const Topic: FC<Props> = ({ topic }) => {
  const topicOwner = topic?.posts?.[0]?.user;
  return (
    <SC.Topic>
      <SC.Info>
        <h3>
          <SC.TopicTitle href={`${COMMUNITY_API_HOST}/topic/${topic.slug}`}>
            {topic.title}
          </SC.TopicTitle>
        </h3>
        <div>
          {topic?.tags?.map((tag, index) => (
            <Tag key={`tag_${index}`} {...tag} />
          ))}

          <User user={topicOwner} />
        </div>
      </SC.Info>
      <SC.Statistics>
        <li>
          <SC.BigNumber>{topic.votes}</SC.BigNumber>
          <Translation id='community.votes' />
        </li>
        <li>
          <SC.BigNumber>{topic.postcount}</SC.BigNumber>
          <Translation id='community.posts' />
        </li>
        <li>
          <SC.BigNumber>{topic.viewcount}</SC.BigNumber>
          <Translation id='community.views' />
        </li>
      </SC.Statistics>
    </SC.Topic>
  );
};

export default Topic;
