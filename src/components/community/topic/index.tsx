import React, { FC, memo } from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import Tag from '../tag';
import User from '../user';

import SC from './styled';
import type { CommunityTopic } from '../../../types';
import EyeIcon from '../../../images/icon-eye.inline.svg';
import LikeIcon from '../../../images/icon-like.inline.svg';
import PostIcon from '../../../images/icon-post.inline.svg';
import LinkIcon from '../../icons/link-icon';
import PinnedIcon from '../../../images/icon-pinned.inline.svg';
import { PATHNAME } from '../../../enums';

import {
  withTranslations,
  Props as TranslationProps
} from '../../../providers/translations';
import { formatDate } from '../../../utils/date';

interface ExternalProps {
  topic: CommunityTopic;
  hideUserInfoAndTags?: boolean;
}

interface Props extends ExternalProps, TranslationProps {}

const Topic: FC<Props> = ({
  topic,
  hideUserInfoAndTags = false,
  translationsService
}) => {
  const topicOwner = topic.user;
  return (
    <SC.Topic
      as={Link}
      to={`${PATHNAME.COMMUNITY}/${topic.category.slug}/${topic.slug}`}
    >
      {topic.pinned > 0 && (
        <SC.Pinned
          title={`${translationsService.translate('community.pinned')}`}
        >
          <PinnedIcon />
        </SC.Pinned>
      )}
      <SC.Info>
        <SC.Title>
          {topic.title}
          <LinkIcon />
        </SC.Title>
        {!hideUserInfoAndTags && (
          <SC.SubTitle>
            <SC.UserTime>
              <User user={topicOwner} />
              {formatDate(new Date(topic.timestamp))}
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
        <li
          title={`${
            topic.votes < 0 ? 0 : topic.votes
          } ${translationsService.translate('community.votes')}`}
        >
          <span>
            <LikeIcon />
          </span>
          {topic.votes < 0 ? 0 : topic.votes}
        </li>
        <li
          title={`${topic.postcount} ${translationsService.translate(
            'community.posts'
          )}`}
        >
          <span>
            <PostIcon />
          </span>
          {topic.postcount}
        </li>
        <li
          title={`${topic.viewcount} ${translationsService.translate(
            'community.views'
          )}`}
        >
          <span>
            <EyeIcon />
          </span>
          {topic.viewcount}
        </li>
      </SC.Statistics>
    </SC.Topic>
  );
};

export default compose<FC<ExternalProps>>(memo, withTranslations)(Topic);
