import React, { FC, memo } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import Truncate from 'react-truncate';

import { htmlToText } from 'html-to-text';

import { compose } from 'redux';
import Link from '../../../../../../../components/link';

import Translation from '../../../../../../../components/translation';

import EyeIcon from '../../../../../../../images/icon-eye.inline.svg';
import LikeIcon from '../../../../../../../images/icon-like.inline.svg';
import PostIcon from '../../../../../../../images/icon-post.inline.svg';

import { CommunityTopic } from '../../../../../../../types';

import { PATHNAME } from '../../../../../../../enums';

import SC from './styled';
import User from '../../../../../../../components/community/user';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../../../providers/translations';
import {
  dateStringToDate,
  formatDate,
  formatDateTime
} from '../../../../../../../utils/date';
import Tag from '../../../../../../../components/community/tag';
import { CommunityPlaceholder } from '../../../../../../../types/enums';

interface ExternalProps {
  topic: CommunityTopic;
}

interface Props extends ExternalProps, TranslationProps {}

const Topic: FC<Props> = ({
  topic: {
    slug,
    title,
    votes,
    viewcount,
    postcount,
    teaser,
    user,
    timestampISO,
    tags,
    category: { slug: categorySlug }
  },
  translationsService
}) => (
  <SC.Topic>
    <SC.TitleContainer>
      <SC.Title>
        <Link
          as={RouterLink}
          to={`${PATHNAME.COMMUNITY}/${categorySlug}/${slug}`}
        >
          {title}
        </Link>
      </SC.Title>
      <SC.UserInfo>
        <User user={user} />
        {formatDate(dateStringToDate(timestampISO))}
      </SC.UserInfo>
      <SC.Tags>
        {tags?.map((tag, index) => (
          <Tag key={`tag-${index}`} {...tag} />
        ))}
      </SC.Tags>
    </SC.TitleContainer>
    <SC.Statistics>
      <li
        title={`${votes < 0 ? 0 : votes} ${translationsService.translate(
          'community.votes'
        )}`}
      >
        <LikeIcon />
        {votes < 0 ? 0 : votes}
      </li>
      <li
        title={`${postcount} ${translationsService.translate(
          'community.posts'
        )}`}
      >
        <PostIcon />
        {postcount}
      </li>
      <li
        title={`${viewcount} ${translationsService.translate(
          'community.views'
        )}`}
      >
        <EyeIcon />
        {viewcount}
      </li>
    </SC.Statistics>
    <SC.PostContainer>
      {teaser && (
        <SC.Teaser>
          <SC.UserInfo>
            <User user={teaser.user} />
            <SC.PostDate>
              <Translation id='community.posted' />
              &nbsp;
              {formatDateTime(new Date(teaser.timestampISO))}
            </SC.PostDate>
          </SC.UserInfo>
          <Link
            as={RouterLink}
            to={`${PATHNAME.COMMUNITY}/${categorySlug}/${slug}`}
          >
            <Truncate lines={2} width={280} trimWhitespace>
              {htmlToText(
                teaser.content.replaceAll(
                  CommunityPlaceholder.CALENDAR_EVENT_TITLE,
                  `${translationsService.translate('community.calendarEvent')}`
                )
              )}
            </Truncate>
          </Link>
        </SC.Teaser>
      )}
      {!teaser && (
        <SC.Teaser>
          <Translation id='community.noPosts' />
        </SC.Teaser>
      )}
    </SC.PostContainer>
  </SC.Topic>
);

export default compose<FC<ExternalProps>>(memo, withTranslations)(Topic);
