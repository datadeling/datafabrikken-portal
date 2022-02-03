import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import Tag from '../tag';
import User from '../user';

import SC from './styled';
import type { CommunityTopic } from '../../../types';
import EyeIcon from '../../../images/icon-eye.inline.svg';
import LikeIcon from '../../../images/icon-like.inline.svg';
import PostIcon from '../../../images/icon-post.inline.svg';
import LinkIcon from '../../icons/link-icon';
import { PATHNAME } from '../../../enums';

interface Props {
  topic: CommunityTopic;
  hideUserInfoAndTags?: boolean;
}

const Topic: FC<Props> = ({ topic, hideUserInfoAndTags = false }) => {
  const topicOwner = topic?.posts?.[0]?.user;
  return (
    <SC.Topic
      as={Link}
      to={`${PATHNAME.COMMUNITY}/${topic.category.slug}/${topic.slug}`}
    >
      <SC.Info>
        <SC.Title>
          {topic.title}
          <LinkIcon />
        </SC.Title>
        {!hideUserInfoAndTags && (
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
        )}
      </SC.Info>
      <SC.Statistics>
        <li>
          <span>
            <LikeIcon />
          </span>
          {topic.votes}
        </li>
        <li>
          <span>
            <PostIcon />
          </span>
          {topic.postcount}
        </li>
        <li>
          <span>
            <EyeIcon />
          </span>
          {topic.viewcount}
        </li>
      </SC.Statistics>
    </SC.Topic>
  );
};

export default Topic;
