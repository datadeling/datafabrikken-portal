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

import Root from '../../../../../components/root';
import ThemeBox from '../../../../../components/theme-box';
import SearchHit from '../../../../../components/search-hit';
import SearchBar from '../../../../../components/search-bar';
import {
  getParameter,
  setMultiselectFilterValue,
  setParameter
} from '../../../../../utils/location-helper';

import ThemeAgricultureIcon from '../../../../../images/theme-agriculture.inline.svg';
import ThemeEducationIcon from '../../../../../images/theme-education.inline.svg';
import ThemeEnvironmentIcon from '../../../../../images/theme-environment.inline.svg';
import ThemeFinanceIcon from '../../../../../images/theme-finance.inline.svg';
import ThemeHealthIcon from '../../../../../images/theme-health.inline.svg';
import ThemeInternationalIcon from '../../../../../images/theme-international.inline.svg';
import ThemeJusticeIcon from '../../../../../images/theme-justice.inline.svg';
import ThemePopulationIcon from '../../../../../images/theme-population.inline.svg';
import ThemePowerIcon from '../../../../../images/theme-power.inline.svg';
import ThemePublicIcon from '../../../../../images/theme-public.inline.svg';
import ThemeRegionsIcon from '../../../../../images/theme-regions.inline.svg';
import ThemeTransportationIcon from '../../../../../images/theme-transportation.inline.svg';

import SC from './styled';

interface Props
  extends RouteComponentProps,
    DatasetsProps,
    ReferenceDataProps {}

const DatasetsPage: FC<Props> = ({
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

  const pageParameter = getParameter('page');
  const queryParameter = getParameter('q');
  const losThemeParameter = getParameter('losTheme');
  const themeParameter = getParameter('theme');

  useEffect(() => {
    getPagedDatasets({
      page: parseInt(pageParameter, 10),
      q: queryParameter,
      losTheme: losThemeParameter,
      theme: themeParameter
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

  return (
    <Root>
      <SC.Container>
        <SC.Title>Søk etter datasett</SC.Title>
        <SC.Row reverse>
          <SC.SearchContainer>
            <SearchBar
              placeholder='Søk etter datasett'
              onSubmit={searchSubmit}
            />
          </SC.SearchContainer>
        </SC.Row>
        <SC.Themes>
          <SC.ThemesRow>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='SOCI'
              label='Befolkning of samfunn'
            >
              <ThemePopulationIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='ENER'
              label='Energi'
            >
              <ThemePowerIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='GOVE'
              label='Forvaltning og offentlig sektor'
            >
              <ThemePublicIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='HEAL'
              label='Helse'
            >
              <ThemeHealthIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='INTR'
              label='Internasjonale temaer'
            >
              <ThemeInternationalIcon />
            </ThemeBox>
          </SC.ThemesRow>
          <SC.ThemesRow>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='AGRI'
              label='Jordbruk, fiskeri, skogbruk og mat'
            >
              <ThemeAgricultureIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='JUST'
              label='Justis, rettssystem og almenn sikkerhet'
            >
              <ThemeJusticeIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='ENVI'
              label='Miljø'
            >
              <ThemeEnvironmentIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='REGI'
              label='Regioner og byer'
            >
              <ThemeRegionsIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='TRAN'
              label='Transport'
            >
              <ThemeTransportationIcon />
            </ThemeBox>
          </SC.ThemesRow>
          <SC.ThemesRow>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='EDUC'
              label='Utdanning, kultur og sport'
            >
              <ThemeEducationIcon />
            </ThemeBox>
            <ThemeBox
              handleChange={handleFilterTheme}
              filterName='theme'
              value='ECON'
              label='Økonomi og finans'
            >
              <ThemeFinanceIcon />
            </ThemeBox>
          </SC.ThemesRow>
        </SC.Themes>
        <SC.Row>
          <SC.Aside />
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
