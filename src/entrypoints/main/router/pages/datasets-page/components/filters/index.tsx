import React, { ChangeEvent, FC, memo } from 'react';

import { MediaType } from '../../../../../../../types';
import Translation from '../../../../../../../components/translation';
import FilterCheckbox from '../../../../../../../components/checkbox-option';

import SC from './styled';

interface Props {
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMultiSelectFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  mediaTypeAggregations: any;
  mediaTypesReferenceData: MediaType[];
  openDataParameter: string;
  accessRightsParameter: string;
  formatParameter: string;
}

const Filters: FC<Props> = ({
  handleCheckboxChange,
  handleMultiSelectFilter,
  mediaTypeAggregations,
  mediaTypesReferenceData,
  openDataParameter,
  accessRightsParameter,
  formatParameter
}) => {
  const datasetsMediaTypes = mediaTypeAggregations?.buckets ?? [];
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
      <SC.FilterSection>
        <SC.FilterTypeTitle>
          <Translation id='filter.format' />
        </SC.FilterTypeTitle>
        {mediaTypesReferenceData
          .filter(({ code }) =>
            datasetsMediaTypes.find((element: any) => element.key === code)
          )
          .map(({ code }: any, index: number) => (
            <FilterCheckbox
              key={code}
              handleCheckboxChange={handleMultiSelectFilter}
              isChecked={formatParameter.includes(code)}
              filterId={`format-${index}`}
              filterName='format'
              filterValue={code}
              mediaTypes={mediaTypesReferenceData}
            />
          ))}
      </SC.FilterSection>
    </>
  );
};

export default memo(Filters);
