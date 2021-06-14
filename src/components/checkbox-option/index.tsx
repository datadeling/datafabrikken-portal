import React, { FC, useState, PropsWithChildren, ChangeEvent } from 'react';

import Translation from '../translation';
import { MediaType } from '../../types';

import SC from './styled';

interface Props {
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  filterId: string;
  filterName: string;
  filterValue?: string;
  label?: string;
  mediaTypes?: MediaType[];
}

const CheckboxContainer: FC<PropsWithChildren<Props>> = ({
  handleCheckboxChange,
  isChecked,
  filterId,
  filterName,
  filterValue = '',
  label,
  mediaTypes
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    handleCheckboxChange(event);
  };

  return (
    <SC.CheckboxContainer>
      <label htmlFor={encodeURIComponent(filterId)}>
        <input
          type='checkbox'
          id={encodeURIComponent(filterId)}
          name={filterName}
          value={filterValue}
          checked={checked}
          onChange={e => onChange(e)}
        />
        <SC.StyledCheckbox $checked={checked}>
          <SC.Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </SC.Icon>
        </SC.StyledCheckbox>
        <span>
          {label ? (
            <Translation id={label} />
          ) : (
            mediaTypes
              ?.filter(({ code }) => code === filterValue)
              ?.shift()
              ?.name?.toLowerCase()
          )}
        </span>
      </label>
    </SC.CheckboxContainer>
  );
};

export default CheckboxContainer;
