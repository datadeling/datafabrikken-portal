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

interface ExternalProps {
  topic: CommunityTopic;
}

interface Props extends ExternalProps, TranslationProps {}

const Topic: FC<Props> = ({
  topic: {
    tid,
    cid,
    title,
    votes,
    viewcount,
    postcount,
    teaser,
    user,
    timestampISO,
    tags
  },
  translationsService
}) => (
  <SC.Topic>
    <SC.TitleContainer>
      <SC.Title>
        <Link as={RouterLink} to={`${PATHNAME.COMMUNITY}/${cid}/${tid}`}>
          {title}
        </Link>
      </SC.Title>
      <SC.UserInfo>
        <User user={user} />
        {formatDate(dateStringToDate(timestampISO))}
      </SC.UserInfo>
      <SC.Tags>
        {tags?.map(tag => (
          <Tag {...tag} />
        ))}
      </SC.Tags>
    </SC.TitleContainer>
    <SC.CountContainer
      title={`${votes < 0 ? 0 : votes} ${translationsService.translate(
        'community.votes'
      )}`}
    >
      <SC.Count>
        <LikeIcon />
      </SC.Count>
      <SC.Count>{votes < 0 ? 0 : votes}</SC.Count>
    </SC.CountContainer>
    <SC.CountContainer
      title={`${postcount} ${translationsService.translate('community.posts')}`}
    >
      <SC.Count>
        <PostIcon />
      </SC.Count>
      <SC.Count>{postcount}</SC.Count>
    </SC.CountContainer>
    <SC.CountContainer
      title={`${viewcount} ${translationsService.translate('community.views')}`}
    >
      <SC.Count>
        <EyeIcon />
      </SC.Count>
      <SC.Count>{viewcount}</SC.Count>
    </SC.CountContainer>
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
          <Link as={RouterLink} to={`${PATHNAME.COMMUNITY}/${cid}/${tid}`}>
            <Truncate lines={3} width={280} trimWhitespace>
              {htmlToText(teaser.content)}
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
