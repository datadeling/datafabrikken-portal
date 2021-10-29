import React, { ChangeEvent, FC, memo, useState } from 'react';

import { compose } from 'redux';
import { Collapse } from 'react-collapse';
import Translation from '../../../../../../../components/translation';
import FilterCheckbox from '../../../../../../../components/checkbox-option';

import SC from './styled';
import { stripFormatPrefix } from '../../../../../../../utils/format';
import {
  withTranslations,
  Props as TranslationProps
} from '../../../../../../../providers/translations';

import LinkIcon from '../../../../../../../components/icons/link-icon';

import FilterSearchField from '../filter-search-field';
import { GetDatasetsParams } from '../../../../../../../components/with-datasets/redux/actions';

interface ExternalProps {
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMultiSelectFilter: (
    checked: boolean,
    name: string,
    value: string
  ) => void;
  handleRemoveFilter: (parameter: string) => void;
  handleClearParameters: () => void;
  formatAggregations: any;
  datasetParameters: GetDatasetsParams;
}

interface Props extends ExternalProps, TranslationProps {}

type BucketItem = {
  label?: string;
  key: string;
  count: number;
};

const Filters: FC<Props> = ({
  handleCheckboxChange,
  handleMultiSelectFilter,
  handleRemoveFilter,
  handleClearParameters,
  formatAggregations,
  translationsService,
  datasetParameters
}) => {
  const [formatSearch, setFormatSearch] = useState('');
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const { format, keywords, opendata, accessRights, last_x_days } =
    datasetParameters;
  const formatParameters = format && format.split(',');
  const renderFilterPills =
    keywords || opendata || accessRights || formatParameters || last_x_days;

  const onClickSearch = (value: string) => {
    setFormatSearch(value);
  };

  const toggleGroup = (group: string) => {
    if (openGroups.includes(group)) {
      setOpenGroups(openGroups.filter((g: string) => g !== group));
    } else {
      openGroups.push(group);
      setOpenGroups([group].concat(openGroups));
    }
  };

  const datasetFormats = formatAggregations?.buckets ?? [];
  const defaultGroup = 'default';
  const groupByPrefixes = (data: BucketItem[]) => {
    const getGroup = (item: BucketItem, prefixes: string[]): string => {
      if (prefixes.length > 0) {
        return item.key.startsWith(prefixes[0])
          ? prefixes[0]
          : getGroup(item, prefixes.slice(1));
      }
      return defaultGroup;
    };

    return data.reduce((results: Record<string, BucketItem[]>, item) => {
      const group = getGroup(item, ['MEDIA_TYPE', 'FILE_TYPE']);
      const label = item.key.replace(new RegExp(`${group}\\s?`), '');
      item.label =
        label || `${translationsService.translate('formatType.UNKNOWN')}`;
      results[group] = results[group] || [];
      results[group].push(item);
      return results;
    }, {});
  };

  const renderFormatFilterCheckbox = (
    items: BucketItem[],
    groupIndex: number
  ) =>
    items.map(item => (
      <FilterCheckbox
        key={`format-${groupIndex}-${item.key}`}
        handleCheckboxChange={({ target: { checked, name, value } }) =>
          handleMultiSelectFilter(checked, name, value)
        }
        isChecked={format?.includes(item.key) ?? false}
        filterId={`format-${groupIndex}-${item.key}`}
        filterName='format'
        filterValue={item.key}
        rawLabel={stripFormatPrefix(item.key)}
      />
    ));

  const renderFormatGroups = () =>
    Object.entries(
      groupByPrefixes(
        datasetFormats.filter(({ key }: any) =>
          key.toLowerCase().includes(formatSearch.toLowerCase())
        )
      )
    )
      .filter(([group]) => group !== defaultGroup)
      .map(([group, items], groupIndex) => (
        <div key={`group-title-${groupIndex}`}>
          <SC.FilterGroup>
            {translationsService.translate(`formatType.${group}`)}
          </SC.FilterGroup>
          {renderFormatFilterCheckbox(items.slice(0, 5), groupIndex)}
          {items.length > 5 && (
            <div>
              <Collapse isOpened={openGroups.includes(group)}>
                {renderFormatFilterCheckbox(items.slice(5), groupIndex)}
              </Collapse>
              <SC.CollapseButton
                onClick={() => toggleGroup(group)}
                $arrowUp={openGroups.includes(group)}
                $arrowDown={!openGroups.includes(group)}
                active
              >
                <LinkIcon />
                {openGroups.includes(group) ? (
                  <Translation id='filter.showFewer' />
                ) : (
                  <Translation id='filter.showMore' />
                )}
              </SC.CollapseButton>
            </div>
          )}
        </div>
      ));

  return (
    <>
      <SC.Title>
        <Translation id='filter.title' />
      </SC.Title>
      {renderFilterPills && (
        <SC.FilterPillContainer>
          {keywords && (
            <SC.FilterPill
              key='filter-pill-keyword'
              onClick={() => handleRemoveFilter('keywords')}
            >
              {keywords}
              <SC.CloseIcon />
            </SC.FilterPill>
          )}
          {opendata && (
            <SC.FilterPill
              key='filter-pill-openData'
              onClick={() => handleRemoveFilter('opendata')}
            >
              <Translation id='filter.openData' />
              <SC.CloseIcon />
            </SC.FilterPill>
          )}
          {accessRights && (
            <SC.FilterPill
              key='filter-pill-accessRights'
              onClick={() => handleRemoveFilter('accessRights')}
            >
              <Translation id='filter.restrictedAccessRights' />
              <SC.CloseIcon />
            </SC.FilterPill>
          )}
          {formatParameters &&
            formatParameters.map((formatString, index) => (
              <SC.FilterPill
                key={`filter-pill-format-${index}`}
                onClick={() =>
                  handleMultiSelectFilter(false, 'format', formatString)
                }
              >
                {formatString.startsWith('MEDIA_TYPE ')
                  ? formatString.split(' ')[1]
                  : formatString}
                <SC.CloseIcon />
              </SC.FilterPill>
            ))}
          {last_x_days && (
            <SC.FilterPill
              key='filter-pill-last_x_days'
              onClick={() => handleRemoveFilter('last_x_days')}
            >
              <Translation
                id='filter.last_x_days'
                values={{ term: last_x_days }}
              />
              <SC.CloseIcon />
            </SC.FilterPill>
          )}

          <SC.InversePill onClick={handleClearParameters}>
            <Translation id='filter.clearAll' />
          </SC.InversePill>
        </SC.FilterPillContainer>
      )}
      <SC.FilterSection>
        <SC.FilterTypeTitle>
          <Translation id='filter.accessRights' />
        </SC.FilterTypeTitle>
        <FilterCheckbox
          label='filter.openData'
          filterId='opendata'
          filterName='opendata'
          isChecked={!!opendata}
          handleCheckboxChange={handleCheckboxChange}
        />
        <FilterCheckbox
          label='filter.restrictedAccessRights'
          filterId='accessRights'
          filterName='accessRights'
          isChecked={!!accessRights}
          handleCheckboxChange={handleCheckboxChange}
        />
      </SC.FilterSection>
      {datasetFormats && (
        <SC.FilterSection>
          <SC.FilterTypeTitle>
            <Translation id='filter.format' />
          </SC.FilterTypeTitle>
          <FilterSearchField
            value={formatSearch}
            onClick={onClickSearch}
            placeholder={`${translationsService.translate(
              'filter.searchFormat'
            )}`}
          />
          {renderFormatGroups()}
        </SC.FilterSection>
      )}
    </>
  );
};

export default compose<FC<ExternalProps>>(memo, withTranslations)(Filters);
