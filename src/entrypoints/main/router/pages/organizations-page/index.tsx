import React, { memo, FC, useState, useEffect, ChangeEvent } from 'react';
import { compose } from 'redux';
import type { RouteComponentProps } from 'react-router-dom';

import SC from './styled';
import translations from '../../../../../services/translations';
import Translation from '../../../../../components/translation';
import ErrorPage from '../../../../../components/error-page';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import Root from '../../../../../components/root';
import withOrganizations, {
  Props as OrganizationsProps
} from '../../../../../components/with-organizations';
import { OrganizationSummary } from '../../../../../types';
import { SortOrder, Entity } from '../../../../../types/enums';
import SearchBar from '../../../../../components/search-bar';
import LoadingSpinner from '../../../../../components/icons/spinner-icon';

interface SortState {
  selector: string[];
  order: SortOrder;
}

interface Props extends OrganizationsProps, RouteComponentProps {}

const OrganizationsPage: FC<Props> = ({
  organizations,
  organizationsActions: {
    getOrganizationsRequested: getOrganizations,
    sortOrganizations
  },
  match: { url }
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const [sortState, setSortState] = useState<SortState>({
    selector: ['prefLabel'],
    order: SortOrder.ASC
  });

  const determineNextSortOrder = (nextSelector: string[]) => {
    const { selector, order } = sortState;
    const isSameSelector = selector.every(i => nextSelector.includes(i));

    if (!isSameSelector && !nextSelector.includes('prefLabel')) {
      return SortOrder.DSC;
    }

    return isSameSelector && order === SortOrder.ASC
      ? SortOrder.DSC
      : SortOrder.ASC;
  };

  const applySort = (selector: string[], nextOrder?: SortOrder) => () => {
    const order = nextOrder ?? determineNextSortOrder(selector);

    sortOrganizations(selector, order);
    setSortState({ selector, order });
  };

  const renderCaret = (selector: string[]) => {
    if (sortState.selector.every(i => selector.includes(i))) {
      return sortState.order === SortOrder.ASC ? (
        <SC.CaretUp />
      ) : (
        <SC.CaretDown />
      );
    }
    return <SC.CaretBoth />;
  };

  const filterOrganizationsByName = (query: string) =>
    query
      ? organizations.filter(({ prefLabel, name }) =>
          (translations.getTranslateText(prefLabel) ?? name ?? '')
            .toLowerCase()
            .includes(query.toLowerCase())
        )
      : organizations;

  const renderSearchHits = (query: string) =>
    filterOrganizationsByName(query).map(
      (
        { id, name, prefLabel, datasetCount },
        index: number,
        organizationSummaries: OrganizationSummary[]
      ) => {
        let sortLabel = '';
        const previousOrganizationName =
          translations.getTranslateText(
            organizationSummaries[index - 1]?.prefLabel
          ) || organizationSummaries[index - 1]?.name;
        const currentOrganizationName =
          translations.getTranslateText(prefLabel) || name;

        if (
          sortState.selector.includes('prefLabel') &&
          (index === 0 ||
            (index > 0 &&
              previousOrganizationName &&
              currentOrganizationName &&
              previousOrganizationName.charAt(0) !==
                currentOrganizationName.charAt(0)))
        ) {
          sortLabel = currentOrganizationName.charAt(0);
        }

        return (
          <SC.SearchHit key={id} className='col-12' to={`${url}/${id}`}>
            <SC.Labels>
              <SC.SortLabel>{sortLabel}</SC.SortLabel>
              {translations.getTranslateText(prefLabel) || name}
            </SC.Labels>
            <SC.Counts>
              <SC.CountTag type={Entity.DATASET}>{datasetCount}</SC.CountTag>
            </SC.Counts>
          </SC.SearchHit>
        );
      }
    );

  useEffect(() => {
    getOrganizations();
  }, []);

  return (
    <Root>
      <SC.Header>
        <SC.Container>
          <SC.Title>
            <Translation id='searchOrganizations' />
          </SC.Title>
        </SC.Container>
      </SC.Header>
      {organizations.length ? (
        <SC.Content>
          <SC.Container>
            <SC.SearchBarContainer>
              <SearchBar
                placeholder={
                  translations.translate('searchOrganization') as string
                }
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(event.currentTarget.value ?? '')
                }
                onClear={() => setSearchQuery('')}
              />
            </SC.SearchBarContainer>
            <SC.SortRow className='col-12'>
              <SC.Labels>
                <SC.SortLabel />
                <SC.TitleSortButton
                  type='button'
                  onClick={applySort(['prefLabel'])}
                >
                  <Translation id='organizationsPage.organization' />
                  {renderCaret(['prefLabel'])}
                </SC.TitleSortButton>
              </SC.Labels>
              <SC.Counts>
                <SC.SortButton
                  type='button'
                  onClick={applySort(['datasetCount'])}
                  data-tip={translations.translate(
                    'organizationsPage.datasetsDescription'
                  )}
                >
                  <Translation id='organizationsPage.numberDatasets' />
                  {renderCaret(['datasetCount'])}
                </SC.SortButton>
              </SC.Counts>
            </SC.SortRow>
            {renderSearchHits(searchQuery)}
          </SC.Container>
        </SC.Content>
      ) : (
        <SC.SpinnerContainer>
          <LoadingSpinner />
        </SC.SpinnerContainer>
      )}
    </Root>
  );
};

export default compose<FC>(
  memo,
  withOrganizations,
  withErrorBoundary(ErrorPage)
)(OrganizationsPage);
