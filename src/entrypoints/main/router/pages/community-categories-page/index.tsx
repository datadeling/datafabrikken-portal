import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';

import withCommunityCategories, {
  Props as CommunityCategoriesProps
} from '../../../../../components/with-community-categories';

import withCommunityTopics, {
  Props as CommunityTopicsProps
} from '../../../../../components/with-community-topics';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';
import CommunityMenu from '../../../../../components/community/menu';

import Category from './components/category';

import SC from './styled';
import { categorySorter } from '../../../../../utils/community/utils';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../providers/translations';
import Link from '../../../../../components/link';
import Translation from '../../../../../components/translation';
import Topic from '../../../../../components/community/topic';
import env from '../../../../../env';

interface Props
  extends CommunityTopicsProps,
    CommunityCategoriesProps,
    TranslationProps {}

const { COMMUNITY_API_HOST } = env;

const CommunityCategoriesPage: FC<Props> = ({
  communityTopics,
  communityTopicsActions: { getRecentTopicsRequested: getRecentTopics },
  communityCategories,
  communityCategoriesActions: {
    getCategoriesRequested: getCategories,
    resetCategories
  },
  translationsService
}) => {
  useEffect(() => {
    getCategories();
    getRecentTopics();
    return () => {
      resetCategories();
    };
  }, []);

  return (
    <Root>
      <Container>
        <SC.Page>
          <CommunityMenu />
          <SC.Header>
            <SC.TitleContainer>
              <SC.Title>
                {translationsService.translate('header.community')}
              </SC.Title>
            </SC.TitleContainer>
          </SC.Header>
          <SC.SubTitle>
            {`${translationsService.translate(
              'community.header.recent'
            )} ${translationsService.translate('community.posts')}`}
          </SC.SubTitle>
          <SC.Topics>
            <Link external href={`${COMMUNITY_API_HOST}/recent`}>
              <Translation id='community.newTopic' />
            </Link>
            {communityTopics.slice(0, 3).map((topic, index) => (
              <Topic key={`topic-${index}`} topic={topic} />
            ))}
          </SC.Topics>
          <SC.SubTitle>
            {`${translationsService.translate(
              'community.header.categories'
            )} ${translationsService.translate(
              'community.header.inDatalandsbyen'
            )}`}
          </SC.SubTitle>
          <SC.Categories>
            {communityCategories
              .filter(category => !category.disabled)
              .sort(categorySorter)
              .map((category, index) => (
                <Category key={`category-${index}`} category={category} />
              ))}
          </SC.Categories>
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(
  memo,
  withCommunityTopics,
  withCommunityCategories,
  withTranslations
)(CommunityCategoriesPage);
