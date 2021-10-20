import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';

import { RouteComponentProps } from 'react-router-dom';

import parse from 'html-react-parser';

import withCommunityTopic, {
  Props as CommunityTopicProps
} from '../../../../../components/with-community-topic';

import PostIcon from '../../../../../images/icon-post.inline.svg';
import UserIcon from '../../../../../images/icon-user.inline.svg';
import EyeIcon from '../../../../../images/icon-eye.inline.svg';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';
import CommunityMenu from '../../../../../components/community/menu';
import Link from '../../../../../components/link';
import Translation from '../../../../../components/translation';

import Post from './components/post';

import SC from './styled';
import withCommunityCategory, {
  Props as CommunityCategoryProps
} from '../../../../../components/with-community-category';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../providers/translations';
import Tag from '../../../../../components/community/tag';

import env from '../../../../../env';

interface Props
  extends CommunityTopicProps,
    CommunityCategoryProps,
    TranslationProps,
    RouteComponentProps {}

const { COMMUNITY_API_HOST } = env;

const CommunityTopicPage: FC<Props> = ({
  communityTopic,
  communityTopicActions: { getTopicRequested: getTopic, resetTopic },
  communityCategoryActions: {
    getCategoryRequested: getCategory,
    resetCategory
  },
  location: { pathname },
  translationsService
}) => {
  useEffect(() => {
    getTopic(
      pathname
        .split('/')
        .slice(pathname.split('/').length - 2)
        .join('/')
    );

    return () => {
      resetTopic();
    };
  }, []);

  useEffect(() => {
    if (communityTopic) {
      getCategory(communityTopic.category?.slug);
    }

    return () => {
      resetCategory();
    };
  }, [communityTopic?.category?.slug]);

  const {
    slug,
    title = '',
    posts = [],
    tags = [],
    postercount,
    postcount,
    viewcount
  } = communityTopic ?? {};

  return (
    <Root>
      <Container>
        <SC.Page>
          <CommunityMenu />
          <SC.Title>{parse(title)}</SC.Title>
          <SC.Header>
            {tags?.length > 0 && (
              <SC.Tags>
                {tags?.map((tag, index) => (
                  <Tag key={`tag-${index}`} {...tag} />
                ))}
              </SC.Tags>
            )}
            <SC.Statistics>
              <li
                title={`${postercount} ${translationsService.translate(
                  'community.users'
                )}`}
              >
                <UserIcon />
                {postercount}
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
            <SC.LinkWrapper>
              <Link href={`${COMMUNITY_API_HOST}/topic/${slug}`} external>
                <Translation id='community.writeComment' />
              </Link>
            </SC.LinkWrapper>
          </SC.Header>
          <SC.Posts>
            {posts.map((post, index) => (
              <Post key={`post-${index}`} post={post} />
            ))}
            <Link href={`${COMMUNITY_API_HOST}/topic/${slug}`} external>
              <Translation id='community.writeComment' />
            </Link>
          </SC.Posts>
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(
  memo,
  withCommunityCategory,
  withCommunityTopic,
  withTranslations
)(CommunityTopicPage);
