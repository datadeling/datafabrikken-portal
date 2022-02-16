import React, { FC, memo } from 'react';
import Translation from '../translation';

import SC from './styled';

interface RadioOptionProps {
  value: any;
  label: string;
  group: string;
  id: string;
  checked?: boolean;
  onChange: any;
}

const RadioOption: FC<RadioOptionProps> = ({
  value,
  label,
  group,
  id,
  checked,
  onChange
}) => (
  <SC.Label htmlFor={`radio-${id}`} key={`radio-${id}-label-key`}>
    <SC.IconContainer>
      <SC.RadioIcon>
        <defs>
          <mask id={id}>
            <rect width='100%' height='100%' fill='white' />
            <circle r={checked ? '4' : '10'} cx='12' cy='12' fill='black' />
          </mask>
        </defs>

        <circle id='donut' r='10' cx='12' cy='12' mask={`url(#${id})`} />
      </SC.RadioIcon>
    </SC.IconContainer>

    <SC.RadioButton
      type='radio'
      id={`radio-${id}`}
      key={`radio-${id}-key`}
      name={group}
      value={value}
      onChange={onChange}
      {...(checked !== undefined && !!checked)}
    />

    <Translation id={label} />
  </SC.Label>
);

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
      <RadioOption
        value={value}
        label={label}
        group={title}
        id={`${value}-${index}`}
        checked={checked}
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
      />
    ))}
  </SC.RadioContainer>
);

export { RadioOption };

export default memo(RadioOptions);
