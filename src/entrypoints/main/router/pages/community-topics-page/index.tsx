import React, { FC, memo, useEffect, useState } from 'react';
import { compose } from 'redux';

import { RouteComponentProps, Link as RouterLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import parse from 'html-react-parser';

import withCommunityCategory, {
  Props as CommunityCategoryProps
} from '../../../../../components/with-community-category';

import withCommunityTopics, {
  Props as CommunityTopicsProps
} from '../../../../../components/with-community-topics';

import Translation from '../../../../../components/translation';
import Link from '../../../../../components/link';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';
import CommunityMenu from '../../../../../components/community/menu';

import Topic from '../../../../../components/community/topic';

import SortButton from '../../../../../components/button-sort';

import SC from './styled';
import env from '../../../../../env';

import { PATHNAME } from '../../../../../enums';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../providers/translations';
import {
  InfoBox,
  InfoBoxBody,
  InfoBoxTitle
} from '../../../../../components/info-box';
import Markdown from '../../../../../components/markdown';
import InfoBoxBodyRight from '../../../../../components/info-box/components/info-box-body-right';

import CategoryTopicsIcon from '../../../../../images/icon-category-topics.inline.svg';

interface Props
  extends CommunityCategoryProps,
    CommunityTopicsProps,
    TranslationProps,
    RouteComponentProps {}

const { COMMUNITY_API_HOST } = env;

const CommunityTopicsPage: FC<Props> = ({
  communityCategory,
  communityCategoryActions: { getCategoryRequested: getCategory },
  communityTopics,
  communityTopicsActions: {
    getTopicsByTagRequested: getTopicsByTag,
    getRecentTopicsRequested: getRecentTopics,
    getPopularTopicsRequested: getPopularTopics
  },
  location: { pathname },
  translationsService
}) => {
  const isRecent = pathname.includes(PATHNAME.COMMUNITY_RECENT);
  const isPopular = pathname.includes(PATHNAME.COMMUNITY_POPULAR);
  const isTags = pathname.includes(PATHNAME.COMMUNITY_TAGS);
  const isCategory = !(isRecent || isPopular || isTags);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortByDateAsc, setSortByDateAsc] = useState(false);

  const getTagFromPathname = () =>
    pathname
      .split('/')
      .slice(pathname.split('/').length - 1)
      .join('');

  const handleSort = (byDateAsc: boolean) => {
    setSortByDateAsc(byDateAsc);
  };

  const getTitle = () => {
    if (isTags) {
      const tag = getTagFromPathname();
      return `${tag[0].toUpperCase()}${tag.slice(1)}`;
    }
    if (isRecent) {
      return translationsService.translate('community.header.recent');
    }
    if (isPopular) {
      return translationsService.translate('community.header.popular');
    }

    return parse(communityCategory?.name ?? '');
  };

  const getActiveTopics = () => {
    if (isCategory) {
      return communityCategory?.topics?.filter(topic => !topic.deleted) ?? [];
    }
    return communityTopics?.filter(topic => !topic.deleted) ?? [];
  };

  const onPageChange = ({ selected }: any) => {
    setCurrentPage(selected + 1);
    window.scroll(0, 0);
  };

  useEffect(() => {
    if (pathname.includes(PATHNAME.COMMUNITY_RECENT)) {
      getRecentTopics();
    } else if (pathname.includes(PATHNAME.COMMUNITY_POPULAR)) {
      getPopularTopics();
    } else if (pathname.includes(PATHNAME.COMMUNITY_TAGS)) {
      getTopicsByTag(
        pathname
          .split('/')
          .slice(pathname.split('/').length - 1)
          .join('/')
      );
    } else {
      getCategory(
        pathname
          .split('/')
          .slice(pathname.split('/').length - 2)
          .join('/'),
        currentPage,
        sortByDateAsc ? 'oldest_to_newest' : 'newest_to_oldest'
      );
    }

    return () => {};
  }, [pathname, sortByDateAsc]);

  return (
    <Root>
      <Container>
        <SC.Page>
          <CommunityMenu />
          <SC.Title>{getTitle()}</SC.Title>
          {isCategory && communityCategory?.children?.length > 0 && (
            <SC.SubTitle>
              <Translation id='community.header.subcategories' />
            </SC.SubTitle>
          )}
          <SC.Subcategories>
            {isCategory &&
              communityCategory?.children?.map(subcategory => (
                <InfoBox
                  key={`category-${subcategory.slug}`}
                  as={RouterLink}
                  to={`${PATHNAME.COMMUNITY}/${subcategory.slug}`}
                >
                  <InfoBoxTitle>
                    <h4>{parse(subcategory.name)}</h4>
                  </InfoBoxTitle>
                  <InfoBoxBody>
                    <Markdown allowHtml>{subcategory.description}</Markdown>
                  </InfoBoxBody>
                  <InfoBoxBodyRight>
                    <CategoryTopicsIcon />
                    {`${subcategory.topic_count} ${
                      subcategory.topic_count === 1
                        ? translationsService.translate('community.topic')
                        : translationsService.translate('community.topics')
                    }`}
                  </InfoBoxBodyRight>
                </InfoBox>
              ))}
          </SC.Subcategories>
          <SC.SubTitle>
            <Translation id='community.header.topics' />
          </SC.SubTitle>
          {isCategory && getActiveTopics().length === 0 && (
            <SC.Info>
              <Translation id='community.categoryHasNoPosts' />
            </SC.Info>
          )}
          <SC.Header>
            {isRecent && (
              <Link external href={`${COMMUNITY_API_HOST}/recent`}>
                <Translation id='community.newTopic' />
              </Link>
            )}
            {isPopular && (
              <Link external href={`${COMMUNITY_API_HOST}/popular`}>
                <Translation id='community.newTopic' />
              </Link>
            )}
            {isTags && (
              <Link
                external
                href={`${COMMUNITY_API_HOST}/tags/${getTagFromPathname()}`}
              >
                <Translation id='community.newTopic' />
              </Link>
            )}
            {isCategory && communityCategory && (
              <Link
                external
                href={`${COMMUNITY_API_HOST}/category/${communityCategory.slug}`}
              >
                <Translation id='community.newTopic' />
              </Link>
            )}
            {isCategory && communityCategory && getActiveTopics().length > 0 && (
              <SC.Sort>
                <SC.SortLabel>
                  <Translation id='community.sort.sortByDate' />
                </SC.SortLabel>
                <SC.SortButtonWrapper>
                  <SortButton
                    onClick={() => handleSort(true)}
                    active={sortByDateAsc}
                    arrowDown={false}
                  >
                    <Translation id='community.sort.ascending' />
                  </SortButton>
                </SC.SortButtonWrapper>
                <SC.SortButtonWrapper>
                  <SortButton
                    onClick={() => handleSort(false)}
                    active={!sortByDateAsc}
                    arrowDown
                  >
                    <Translation id='community.sort.descending' />
                  </SortButton>
                </SC.SortButtonWrapper>
              </SC.Sort>
            )}
          </SC.Header>

          {getActiveTopics().map((topic, index) => (
            <Topic key={`topic-${index}`} topic={topic} />
          ))}

          {isCategory && communityCategory && getActiveTopics().length > 0 && (
            <SC.Pagination>
              <ReactPaginate
                pageCount={communityCategory.pagination.pageCount}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel='forrige'
                nextLabel='neste'
                breakLabel={<span>...</span>}
                breakClassName='break-me'
                containerClassName='pagination'
                onPageChange={onPageChange}
                activeClassName='active'
                forcePage={currentPage - 1}
                disableInitialCallback
              />
            </SC.Pagination>
          )}
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(
  memo,
  withCommunityCategory,
  withCommunityTopics,
  withTranslations
)(CommunityTopicsPage);
