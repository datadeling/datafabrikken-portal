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

interface ExternalProps {
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMultiSelectFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  formatAggregations: any;
  openDataParameter: string;
  accessRightsParameter: string;
  formatParameter: string;
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
  formatAggregations,
  openDataParameter,
  accessRightsParameter,
  formatParameter,
  translationsService
}) => {
  const [formatSearch, setFormatSearch] = useState('');
  const [openGroups, setOpenGroups] = useState<string[]>([]);

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
        handleCheckboxChange={handleMultiSelectFilter}
        isChecked={formatParameter.includes(item.key)}
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
      <SC.FilterSection>
        <SC.FilterTypeTitle>
          <Translation id='filter.accessRights' />
        </SC.FilterTypeTitle>
        <FilterCheckbox
          label='filter.openData'
          filterId='opendata'
          filterName='opendata'
          isChecked={!!openDataParameter}
          handleCheckboxChange={handleCheckboxChange}
        />
        <FilterCheckbox
          label='filter.restrictedAccessRights'
          filterId='accessRights'
          filterName='accessRights'
          isChecked={!!accessRightsParameter}
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
