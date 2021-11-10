import React, {
  ChangeEvent,
  FC,
  FormEvent,
  memo,
  useEffect,
  useState
} from 'react';
import { compose } from 'redux';
import { RouteComponentProps, useLocation, useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import withDatasets, {
  Props as DatasetsProps
} from '../../../../../components/with-datasets';
import withReferenceData, {
  Props as ReferenceDataProps
} from '../../../../../components/with-reference-data';

import { Menu, Trigger } from '../../../../../components/dropdown-menu';
import Translation from '../../../../../components/translation';
import Root from '../../../../../components/root';
import SearchHit from '../../../../../components/search-hit';
import SearchBar from '../../../../../components/search-bar';
import {
  clearParameters,
  getAllParameters,
  getParameter,
  removeParameter,
  setMultiselectFilterValue,
  setParameter,
  setRadioFilterValue
} from '../../../../../utils/location-helper';

import Themes from './components/themes';
import Filters from './components/filters';

import SC from './styled';
import InternalLink from '../../../../../components/link-internal';
import { PATHNAME } from '../../../../../enums';
import withReport, {
  Props as ReportProps
} from '../../../../../components/with-report';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import withOrganization, {
  Props as OrganizationProps
} from '../../../../../components/with-organization';
import ErrorPage from '../../../../../components/error-page';
import {
  StatisticsRegularLink,
  StatisticsRegularButton
} from '../../../../../components/statistics-regular';
import translations from '../../../../../services/translations';
import { GetDatasetsParams } from '../../../../../components/with-datasets/redux/actions';

interface Props
  extends RouteComponentProps,
    DatasetsProps,
    ReportProps,
    ReferenceDataProps,
    OrganizationProps {}

const DatasetsPage: FC<Props> = ({
  datasetsAggregations,
  datasets,
  totalDatasets,
  datasetPageSize,
  datasetsPage,
  isLoadingDatasets,
  datasetsActions: {
    getPagedDatasetsRequested: getPagedDatasets,
    resetPagedDatasets
  },
  referenceData: { themes = [] },
  referenceDataActions: { getReferenceDataRequested: getReferenceData },
  datasetsReport,
  reportActions: { getDatasetsReportRequested: getReport },
  organization,
  organizationActions: { getOrganizationRequested: getOrganization }
}) => {
  const [isDropdownFiltersOpen, setIsDropdownFiltersOpen] = useState(false);

  const openDropdownFilters = () => {
    setIsDropdownFiltersOpen(true);
  };

  const closeDropdownFilters = () => {
    setIsDropdownFiltersOpen(false);
  };

  const { search } = useLocation();
  const history = useHistory();

  const { format } = datasetsAggregations;

  const pageParameter = getParameter('page');
  const datasetParams: GetDatasetsParams = getAllParameters();

  useEffect(() => {
    if (Object.keys(datasetParams).length > 0) {
      getPagedDatasets({
        page: parseInt(pageParameter, 10),
        ...datasetParams
      });
    } else {
      resetPagedDatasets();
    }
  }, [search]);

  useEffect(() => {
    if (themes.length === 0) {
      getReferenceData('themes');
    }
    if (datasetsReport == null) {
      getReport({});
    }
    if (datasetParams.organizationNumber || datasetParams.orgPath) {
      getOrganization(
        datasetParams.organizationNumber ??
          datasetParams?.orgPath?.split('/').pop()
      );
    }
  }, []);

  const searchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParameter(history, {
      q: e.currentTarget.searchBox.value || null,
      page: null
    });
  };

  const searchClear = () => {
    setParameter(history, {
      q: null,
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

  const handleMultiSelectFilter = (
    checked: boolean,
    name: string,
    value: string
  ) => {
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
              onClear={searchClear}
            />
          </SC.SearchContainer>
        </SC.Row>
        <SC.DropdownFilters
          isOpen={isDropdownFiltersOpen}
          onClose={closeDropdownFilters}
        >
          <Trigger>
            <SC.DropdownFilterButton onClick={openDropdownFilters}>
              {isDropdownFiltersOpen ? (
                <>
                  <Translation id='filter.closeFilters' />
                  <SC.ExpandLessIcon />
                </>
              ) : (
                <>
                  <Translation id='filter.openFilters' />
                  <SC.ExpandMoreIcon />
                </>
              )}
            </SC.DropdownFilterButton>
          </Trigger>
          <Menu>
            <Themes onFilterTheme={handleFilterTheme} />
            {search && (
              <Filters
                handleRadioChange={(selected, deselected) =>
                  setRadioFilterValue(history, selected, deselected)
                }
                handleMultiSelectFilter={handleMultiSelectFilter}
                handleRemoveFilter={(parameter: string) =>
                  removeParameter(history, parameter)
                }
                handleClearParameters={() => clearParameters(history)}
                formatAggregations={format}
                datasetParameters={datasetParams}
              />
            )}
          </Menu>
        </SC.DropdownFilters>
        <SC.Themes>
          <Themes onFilterTheme={handleFilterTheme} />
        </SC.Themes>
        {search || datasets.length > 0 ? (
          <SC.Row>
            <SC.Aside>
              <SC.Filters>
                <Filters
                  handleRadioChange={(selected, deselected) =>
                    setRadioFilterValue(history, selected, deselected)
                  }
                  handleMultiSelectFilter={handleMultiSelectFilter}
                  handleRemoveFilter={(parameter: string) =>
                    removeParameter(history, parameter)
                  }
                  handleClearParameters={() => clearParameters(history)}
                  formatAggregations={format}
                  datasetParameters={datasetParams}
                  publisher={organization}
                />
              </SC.Filters>
            </SC.Aside>
            {datasets?.length > 0 || isLoadingDatasets ? (
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
                    />
                  )
                )}

                {totalDatasets / datasetPageSize > 1 && (
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
            ) : (
              <SC.NoHits>
                <SC.NoDatasetsFoundIcon />
                <h3>
                  <Translation id='findDataPage.noHits' />
                </h3>
                <p>
                  <Translation id='findDataPage.noHitsSubtitle' />{' '}
                  <InternalLink
                    to={`${PATHNAME.FIND_DATA}${PATHNAME.DATASETS}`}
                  >
                    <Translation id='findDataPage.noHitsLink' />
                  </InternalLink>
                </p>
                <p>
                  <Translation id='findDataPage.noHitsCommunity' />{' '}
                  <InternalLink
                    to={`${PATHNAME.COMMUNITY}/6/etterspør-datasett-og-api-er`}
                  >
                    <Translation id='findDataPage.noHitsCommunityLink' />
                  </InternalLink>
                </p>
              </SC.NoHits>
            )}
          </SC.Row>
        ) : (
          <SC.ReportsRow>
            <StatisticsRegularButton
              onClick={() => getPagedDatasets({})}
              icon={<SC.DatasetIcon />}
              count={datasetsReport?.totalObjects ?? ''}
              description={
                translations.translate(
                  'findDataPage.totalNumDatasets'
                ) as string
              }
            />
            <StatisticsRegularLink
              to={`${PATHNAME.FIND_DATA}${PATHNAME.DATASETS}?last_x_days=7`}
              icon={<SC.NewIcon />}
              count={datasetsReport?.newLastWeek ?? ''}
              description={
                translations.translate('findDataPage.newDatasets') as string
              }
            />
            <StatisticsRegularLink
              to={`${PATHNAME.ORGANIZATION}`}
              icon={<SC.DatasetIcon />}
              count={datasetsReport?.organizationCount ?? 0}
              description={
                translations.translate(
                  'findDataPage.numOrganizationsPublished'
                ) as string
              }
            />
          </SC.ReportsRow>
        )}
      </SC.Container>
    </Root>
  );
};

export default compose<FC>(
  memo,
  withDatasets,
  withReferenceData,
  withReport,
  withOrganization,
  withErrorBoundary(ErrorPage)
)(DatasetsPage);
