import React, { ChangeEvent, FC, FormEvent, memo, useEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps, useLocation, useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import withDatasets, {
  Props as DatasetsProps
} from '../../../../../components/with-datasets';
import withReferenceData, {
  Props as ReferenceDataProps
} from '../../../../../components/with-reference-data';

import Translation from '../../../../../components/translation';
import Root from '../../../../../components/root';
import SearchHit from '../../../../../components/search-hit';
import SearchBar from '../../../../../components/search-bar';
import {
  getParameter,
  removeParameter,
  setMultiselectFilterValue,
  setParameter
} from '../../../../../utils/location-helper';

import Themes from './components/themes';
import Filters from './components/filters';

import SC from './styled';

interface Props
  extends RouteComponentProps,
    DatasetsProps,
    ReferenceDataProps {}

const DatasetsPage: FC<Props> = ({
  datasetsAggregations,
  datasets,
  totalDatasets,
  datasetPageSize,
  datasetsPage,
  datasetsActions: { getPagedDatasetsRequested: getPagedDatasets },
  referenceData: { themes = [], mediatypes = [] },
  referenceDataActions: { getReferenceDataRequested: getReferenceData }
}) => {
  const { search } = useLocation();
  const history = useHistory();

  const { mediaType } = datasetsAggregations;

  const pageParameter = getParameter('page');
  const queryParameter = getParameter('q');
  const losThemeParameter = getParameter('losTheme');
  const themeParameter = getParameter('theme');
  const openDataParameter = getParameter('opendata');
  const accessRightsParameter = getParameter('accessRights');
  const formatParameter = getParameter('format');

  useEffect(() => {
    getPagedDatasets({
      page: parseInt(pageParameter, 10),
      q: queryParameter,
      losTheme: losThemeParameter,
      theme: themeParameter,
      opendata: openDataParameter,
      accessRights: accessRightsParameter,
      format: formatParameter
    });
  }, [search]);

  useEffect(() => {
    if (themes.length === 0) {
      getReferenceData('themes');
    }
    if (mediatypes.length === 0) {
      getReferenceData('mediatypes');
    }
  }, []);

  const searchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParameter(history, {
      q: e.currentTarget.searchBox.value || null,
      page: null
    });
  };

  const onPageChange = ({ selected }: any) => {
    setParameter(history, { page: selected });
    window.scroll(0, 0);
  };

  const handleFilterTheme = ({
    target: { name, value, checked }
  }: ChangeEvent<HTMLInputElement>) => {
    setMultiselectFilterValue(history, name, value, checked);
  };

  const handleCheckboxChange = ({
    target: { checked, name }
  }: ChangeEvent<HTMLInputElement>) => {
    checked
      ? setParameter(history, { [name]: 'true' })
      : removeParameter(history, name);
  };

  const handleMultiSelectFilter = ({
    target: { checked, name, value }
  }: ChangeEvent<HTMLInputElement>) => {
    setMultiselectFilterValue(history, name, value, checked);
  };

  return (
    <Root>
      <SC.Container>
        <SC.Title>
          <Translation id='findDataPage.findData' />
        </SC.Title>
        <SC.Row reverse>
          <SC.SearchContainer>
            <SearchBar
              placeholder='Søk etter datasett'
              onSubmit={searchSubmit}
            />
          </SC.SearchContainer>
        </SC.Row>
        <SC.Themes>
          <Themes onFilterTheme={handleFilterTheme} />
        </SC.Themes>
        <SC.Row>
          <SC.Aside>
            <SC.Filters>
              <Filters
                handleCheckboxChange={handleCheckboxChange}
                handleMultiSelectFilter={handleMultiSelectFilter}
                mediaTypeAggregations={mediaType}
                mediaTypesReferenceData={mediatypes}
                openDataParameter={openDataParameter}
                accessRightsParameter={accessRightsParameter}
                formatParameter={formatParameter}
              />
            </SC.Filters>
          </SC.Aside>
          <SC.SearchList>
            {datasets?.map(
              ({
                id,
                publisher,
                title,
                description,
                distribution,
                accessRights
              }: any) => (
                <SearchHit
                  key={id}
                  id={id}
                  publisher={publisher}
                  title={title}
                  description={description}
                  distributions={distribution}
                  accessRight={accessRights}
                  mediatypes={mediatypes}
                />
              )
            )}
            {datasets?.length > 0 && (
              <SC.Pagination>
                <ReactPaginate
                  pageCount={totalDatasets / datasetPageSize}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  previousLabel='forrige'
                  nextLabel='neste'
                  breakLabel={<span>...</span>}
                  breakClassName='break-me'
                  containerClassName='pagination'
                  onPageChange={onPageChange}
                  activeClassName='active'
                  forcePage={datasetsPage}
                  disableInitialCallback
                />
              </SC.Pagination>
            )}
          </SC.SearchList>
        </SC.Row>
      </SC.Container>
    </Root>
  );
};

export default compose<FC>(memo, withDatasets, withReferenceData)(DatasetsPage);
