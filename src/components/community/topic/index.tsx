import React, { FC } from 'react';

import Tag from '../tag';
import User from '../user';

import SC from './styled';
import type { CommunityTopic } from '../../../types';
import EyeIcon from '../../../images/icon-eye.inline.svg';
import LikeIcon from '../../../images/icon-like.inline.svg';
import PostIcon from '../../../images/icon-post.inline.svg';
import { PATHNAME } from '../../../enums';
import InternalLink from '../../link-internal';

interface Props {
  topic: CommunityTopic;
}

const Topic: FC<Props> = ({ topic }) => {
  const topicOwner = topic?.posts?.[0]?.user;
  return (
    <SC.Topic>
      <SC.Info>
        <SC.Title>
          <InternalLink
            to={`${PATHNAME.COMMUNITY}/${topic.category.slug}/${topic.slug}`}
          >
            {topic.title}
          </InternalLink>
        </SC.Title>
        <SC.SubTitle>
          <SC.UserTime>
            <User user={topicOwner} />
            {new Date(topic.timestamp).toLocaleDateString()}
          </SC.UserTime>
          <SC.Tags>
            {topic?.tags?.map((tag, index) => (
              <Tag key={`tag_${index}`} {...tag} />
            ))}
          </SC.Tags>
        </SC.SubTitle>
      </SC.Info>
      <SC.Statistics>
        <li>
          <LikeIcon />
          {topic.votes}
        </li>
        <li>
          <PostIcon />
          {topic.postcount}
        </li>
        <li>
          <EyeIcon />

          {topic.viewcount}
        </li>
      </SC.Statistics>
    </SC.Topic>
  );
};

export default Topic;
