import React, { FC, memo, useEffect, useState } from 'react';
import { compose } from 'redux';

import { RouteComponentProps } from 'react-router-dom';

import withCommunityCategory, {
  Props as CommunityCategoryProps
} from '../../../../../components/with-community-category';

import Translation from '../../../../../components/translation';
import Link, { Variant } from '../../../../../components/link';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';

import Topic from './components/topic';

import SC from './styled';
import env from '../../../../../env';
import { CommunityTopic } from '../../../../../types';
import { compareTopics } from '../../../../../utils/community/utils';

interface Props extends CommunityCategoryProps, RouteComponentProps {}

const { COMMUNITY_API_HOST } = env;

const CommunityCategoryPage: FC<Props> = ({
  communityCategory,
  communityCategoryActions: {
    getCategoryRequested: getCategory,
    resetCategory
  },
  location: { pathname }
}) => {
  useEffect(() => {
    getCategory(
      pathname
        .split('/')
        .slice(pathname.split('/').length - 2)
        .join('/')
    );

    return () => {
      resetCategory();
    };
  }, []);

  const [sortByDateAsc, setSortByDateAsc] = useState(false);
  const [sortByDateDesc, setSortByDateDesc] = useState(true);

  const sortTopics = (first: CommunityTopic, second: CommunityTopic) =>
    compareTopics(first, second, sortByDateAsc, sortByDateDesc);

  const handleSort = (byDateAsc: boolean) => {
    setSortByDateAsc(byDateAsc);
    setSortByDateDesc(!byDateAsc);
  };

  const { name = '', slug = '', topics = [] } = communityCategory ?? {};

  const getActiveTopics = () => topics.filter(topic => !topic.deleted);

  return (
    <Root>
      <Container>
        <SC.Page>
          <SC.Title>{name}</SC.Title>
          {getActiveTopics().length === 0 && (
            <SC.Info>
              <Translation id='community.categoryHasNoPosts' />
            </SC.Info>
          )}
          <SC.Header>
            <Link
              variant={Variant.PRIMARY}
              external
              href={`${COMMUNITY_API_HOST}/category/${slug}`}
            >
              <Translation id='community.newTopic' />
            </Link>
            {getActiveTopics().length > 0 && (
              <SC.Sort>
                <SC.SortLabel>Sorter etter:</SC.SortLabel>
                <SC.SortButtonWrapper>
                  <SC.SortButton
                    onClick={() => handleSort(true)}
                    active={sortByDateAsc}
                  >
                    <Translation id='community.sort.dateAscending' />
                  </SC.SortButton>
                </SC.SortButtonWrapper>
                <SC.SortButtonWrapper>
                  <SC.SortButton
                    onClick={() => handleSort(false)}
                    active={sortByDateDesc}
                  >
                    <Translation id='community.sort.dateDescending' />
                  </SC.SortButton>
                </SC.SortButtonWrapper>
              </SC.Sort>
            )}
          </SC.Header>
          {getActiveTopics()
            .sort(sortTopics)
            .map((topic, index) => (
              <Topic key={`topic-${index}`} topic={topic} />
            ))}
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(memo, withCommunityCategory)(CommunityCategoryPage);
