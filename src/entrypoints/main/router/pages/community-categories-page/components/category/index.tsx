import React, { FC, memo } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import Truncate from 'react-truncate';

import parse from 'html-react-parser';

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
import InsightIcon from '../../../../../../../images/icon-community-insight.inline.svg';
import LawIcon from '../../../../../../../images/icon-law.inline.svg';

import { CommunityCategory } from '../../../../../../../types';

import { PATHNAME } from '../../../../../../../enums';

import SC from './styled';
import User from '../../../../../../../components/community/user';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../../../providers/translations';
import { formatDateTime } from '../../../../../../../utils/date';
import { postSorter } from '../../../../../../../utils/community/utils';

interface ExternalProps {
  category: CommunityCategory;
}

interface Props extends ExternalProps, TranslationProps {}

const getCategoryIcon = (slug: string) => {
  const slugName = slug.split('/').pop();

  switch (slugName) {
    case 'gode-eksempler-på-bruk':
      return <LightBulbIcon />;
    case 'møter-og-arrangementer':
      return <CalendarIcon />;
    case 'tilbakemeldinger-og-nyheter':
      return <ThumbsIcon />;
    case 'etterspør-datasett-og-api-er':
      return <MegaphoneIcon />;
    case 'innsynsløsning-utredning-av-tekniske-og-juridiske-muligheter':
      return <InsightIcon />;
    case 'juss-og-data':
      return <LawIcon />;
    default:
      return <TextCloudIcon />;
  }
};

const Category: FC<Props> = ({
  category: {
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
      <SC.TitleContainer>
        <SC.CategoryIcon>{getCategoryIcon(slug)}</SC.CategoryIcon>
        <SC.TitleColumn>
          <SC.Title>
            <Link as={RouterLink} to={`${PATHNAME.COMMUNITY}/${slug}`}>
              {parse(name)}
            </Link>
          </SC.Title>
          <SC.Ingress>{parse(description)}</SC.Ingress>
        </SC.TitleColumn>
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
              <Truncate lines={2} width={280} trimWhitespace>
                {lastPost.topic.title}
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
