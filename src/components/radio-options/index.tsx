import React, { FC, memo } from 'react';
import Translation from '../translation';

import SC from './styled';

interface Option {
  value: string;
  label: string;
  checked: boolean;
}

interface Props {
  title: string;
  options: Option[];
  onChange: (selected: string, deselected: string[]) => void;
}

const RadioOptions: FC<Props> = ({ title, options, onChange }) => (
  <SC.RadioContainer>
    {options.map(({ value, label, checked }, index) => (
      <SC.Label htmlFor={`radio-${index}-${value}`}>
        <SC.IconContainer $checked={checked}>
          <SC.RadioIcon>
            <circle cx='12' cy='12' r='4' />
          </SC.RadioIcon>
        </SC.IconContainer>

        <SC.RadioButton
          type='radio'
          id={`radio-${index}-${value}`}
          name={title}
          value={value}
          onChange={() =>
            onChange(
              value,
              options.reduce(
                (accumulator, option) =>
                  option.value === value
                    ? accumulator
                    : [...accumulator, option.value],
                [] as string[]
              )
            )
          }
          checked={checked}
        />

        <Translation id={label} />
      </SC.Label>
    ))}
  </SC.RadioContainer>
);

export default memo(RadioOptions);
