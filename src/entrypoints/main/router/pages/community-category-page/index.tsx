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
    getCategory(pathname.substr(pathname.lastIndexOf('/') + 1));
    return () => {
      resetCategory();
    };
  }, []);

  const [sortByDateAsc, setSortByDateAsc] = useState(false);
  const [sortByDateDesc, setSortByDateDesc] = useState(false);

  const sortTopics = (first: CommunityTopic, second: CommunityTopic) => {
    if (sortByDateAsc) {
      if (first.timestamp > second.timestamp) {
        return 1;
      }
      if (first.timestamp < second.timestamp) {
        return -1;
      }
      return 0;
    }
    if (sortByDateDesc) {
      if (first.timestamp > second.timestamp) {
        return -1;
      }
      if (first.timestamp < second.timestamp) {
        return 1;
      }
      return 0;
    }
    if (first.index < second.index) {
      return -1;
    }
    if (first.index > second.index) {
      return 1;
    }
    return 0;
  };

  const handleSort = (byDateAsc: boolean) => {
    setSortByDateAsc(byDateAsc);
    setSortByDateDesc(!byDateAsc);
  };

  const { name = '', topics = [] } = communityCategory ?? {};

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
              href={`${COMMUNITY_API_HOST}/login`}
            >
              <Translation id='community.loginToPublish' />
            </Link>
            {getActiveTopics().length > 0 && (
              <SC.Sort>
                <SC.SortLabel>Sorter etter:</SC.SortLabel>
                <SC.SortButtonWrapper>
                  <SC.SortButton
                    onClick={() => handleSort(true)}
                    active={sortByDateAsc}
                  >
                    Dato stigende
                  </SC.SortButton>
                </SC.SortButtonWrapper>
                <SC.SortButtonWrapper>
                  <SC.SortButton
                    onClick={() => handleSort(false)}
                    active={sortByDateDesc}
                  >
                    Dato synkende
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
