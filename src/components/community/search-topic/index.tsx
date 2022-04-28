import React, { FC, memo } from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import type { CommunitySearchPost } from '../../../types';

import LikeIcon from '../../../images/icon-like.inline.svg';
import PostIcon from '../../../images/icon-post.inline.svg';
import FolderIcon from '../../../images/icon-folder.inline.svg';

import {
  withTranslations,
  Props as TranslationProps
} from '../../../providers/translations';
import { formatDate } from '../../../utils/date';

import LinkIcon from '../../icons/link-icon';
import TruncatedText from '../../truncated-text';

import Tag from '../tag';
import User from '../user';

import SC from './styled';
import { pruneNodebbTemplateTags } from '../../../utils/community/utils';

interface ExternalProps {
  communitySearchPost: CommunitySearchPost;
}

interface Props extends ExternalProps, TranslationProps {}

const SearchTopic: FC<Props> = ({
  communitySearchPost: { topic, user, votes, timestamp, content, category },
  translationsService
}) => (
  <SC.SearchPost as={Link} to={`${category.slug}/${topic.slug}`}>
    <SC.Info>
      <SC.Title>
        {topic.title}
        <LinkIcon />
      </SC.Title>
      <TruncatedText visibleLines={4} lineHeight={28} showExpandButton={false}>
        {pruneNodebbTemplateTags(
          content.replace(/(<([^>]+)>)/gi, ''),
          translationsService
        )}
      </TruncatedText>
      <SC.SubTitle>
        <SC.UserTime>
          <User user={user} />
          {formatDate(new Date(timestamp))}
        </SC.UserTime>
        <SC.Tags>
          {topic?.tags?.map((tag, index) => (
            <Tag key={`tag_${index}`} {...tag} />
          ))}
        </SC.Tags>
        <SC.Category>
          <FolderIcon />
          {category.name}
        </SC.Category>
      </SC.SubTitle>
    </SC.Info>
    <SC.Statistics>
      <li
        title={`${votes < 0 ? 0 : votes} ${translationsService.translate(
          'community.votes'
        )}`}
      >
        <span>
          <LikeIcon />
        </span>
        {votes < 0 ? 0 : votes}
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
    </SC.Statistics>
  </SC.SearchPost>
);

export default compose<FC<ExternalProps>>(memo, withTranslations)(SearchTopic);
