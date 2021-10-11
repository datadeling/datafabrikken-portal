import React, { FC, memo } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import Truncate from 'react-truncate';

import { htmlToText } from 'html-to-text';

import { compose } from 'redux';
import Link from '../../../../../../../components/link';

import Translation from '../../../../../../../components/translation';

import TextCloudIcon from '../../../../../../../images/icon-text-cloud.inline.svg';
import LightBulbIcon from '../../../../../../../images/icon-lightbulb.inline.svg';
import CalendarIcon from '../../../../../../../images/icon-calendar.inline.svg';
import MegaphoneIcon from '../../../../../../../images/icon-megaphone.inline.svg';
import ThumbsIcon from '../../../../../../../images/icon-thumbs.inline.svg';
import PostIcon from '../../../../../../../images/icon-post.inline.svg';
import TopicIcon from '../../../../../../../images/icon-topic.inline.svg';

import { CommunityCategory } from '../../../../../../../types';

import { PATHNAME } from '../../../../../../../enums';

import SC from './styled';
import User from '../../../../../../../components/community/user';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../../../providers/translations';
import { formatDateTime } from '../../../../../../../utils/date';
import { CommunityPlaceholder } from '../../../../../../../types/enums';
import { postSorter } from '../../../../../../../utils/community/utils';

interface ExternalProps {
  category: CommunityCategory;
}

interface Props extends ExternalProps, TranslationProps {}

const getCategoryIcon = (id: number) => {
  switch (id) {
    case 2:
      return <LightBulbIcon />;
    case 3:
      return <CalendarIcon />;
    case 4:
      return <ThumbsIcon />;
    case 6:
    case 7:
      return <MegaphoneIcon />;
    default:
      return <TextCloudIcon />;
  }
};

const Category: FC<Props> = ({
  category: {
    cid,
    slug,
    name,
    description,
    post_count: postCount,
    topic_count: topicCount,
    posts
  },
  translationsService
}) => {
  const lastPost = posts.sort(postSorter)[0];

  return (
    <SC.Category>
      <SC.CategoryIcon>{getCategoryIcon(cid)}</SC.CategoryIcon>
      <SC.TitleContainer>
        <SC.Title>
          <Link as={RouterLink} to={`${PATHNAME.COMMUNITY}/${slug}`}>
            {name}
          </Link>
        </SC.Title>
        <SC.Ingress>{description}</SC.Ingress>
      </SC.TitleContainer>
      <SC.Statistics>
        <li
          title={`${topicCount} ${translationsService.translate(
            'community.topics'
          )}`}
        >
          <TopicIcon />
          {topicCount}
        </li>
        <li
          title={`${postCount} ${translationsService.translate(
            'community.posts'
          )}`}
        >
          <PostIcon />
          {postCount}
        </li>
      </SC.Statistics>

      <SC.PostContainer>
        {lastPost && (
          <SC.Post>
            <SC.UserInfo>
              <User user={lastPost.user} />
              <SC.PostDate>
                <Translation id='community.posted' />
                &nbsp;
                {formatDateTime(new Date(lastPost.timestampISO))}
              </SC.PostDate>
            </SC.UserInfo>
            <Link
              as={RouterLink}
              to={`${PATHNAME.COMMUNITY}/${slug}/${lastPost.topic.slug}`}
            >
              <Truncate lines={3} width={280} trimWhitespace>
                {htmlToText(
                  lastPost.content.replaceAll(
                    CommunityPlaceholder.CALENDAR_EVENT_TITLE,
                    `${translationsService.translate(
                      'community.calendarEvent'
                    )}`
                  )
                )}
              </Truncate>
            </Link>
          </SC.Post>
        )}
        {!lastPost && (
          <SC.Post>
            <Translation id='community.noPosts' />
          </SC.Post>
        )}
      </SC.PostContainer>
    </SC.Category>
  );
};

export default compose<FC<ExternalProps>>(memo, withTranslations)(Category);
