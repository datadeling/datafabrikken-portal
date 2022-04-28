import React, { FC, memo } from 'react';
import { compose } from 'redux';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import {
  getParameter,
  setParameter
} from '../../../../../utils/location-helper';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../providers/translations';
import { useSearchCommunityQuery } from '../../../../../services/api/community-api/community-search';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';
import CommunityMenu from '../../../../../components/community/menu';
import SearchTopic from '../../../../../components/community/search-topic';

import SC from './styled';

interface Props extends TranslationProps, RouteComponentProps {}

const CommunitySearchPage: FC<Props> = ({ translationsService }) => {
  const queryParameter = getParameter('q');
  const pageParameter = getParameter('page');
  const currentPage = parseInt(pageParameter, 10);

  const { currentData } = useSearchCommunityQuery({
    queryTerm: queryParameter,
    page: currentPage
  });

  const history = useHistory();

  const onPageChange = ({ selected }: any) => {
    setParameter(history, { page: selected + 1 });
    window.scroll(0, 0);
  };

  return (
    <Root>
      <Container>
        <SC.Page>
          <CommunityMenu />
          {queryParameter && (
            <>
              <SC.Header>
                <SC.SubTitle>
                  {`${translationsService.translate(
                    'community.header.searchHits',
                    {
                      matchCount: `${currentData?.matchCount}`
                    }
                  )}`}
                </SC.SubTitle>
              </SC.Header>

              {currentData?.posts.map((post, index) => (
                <SearchTopic
                  key={`topic-${index}`}
                  communitySearchPost={post}
                />
              ))}
              {currentData && currentData.posts?.length > 0 && (
                <SC.Pagination>
                  <ReactPaginate
                    pageCount={currentData.pagination.pageCount}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    previousLabel='forrige'
                    nextLabel='neste'
                    breakLabel={<span>...</span>}
                    breakClassName='break-me'
                    containerClassName='pagination'
                    onPageChange={onPageChange}
                    activeClassName='active'
                    forcePage={currentData.pagination.currentPage - 1}
                    disableInitialCallback
                  />
                </SC.Pagination>
              )}
            </>
          )}
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(memo, withTranslations)(CommunitySearchPage);
