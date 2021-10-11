import React, {
  memo,
  FC,
  useState,
  ChangeEventHandler,
  KeyboardEventHandler
} from 'react';
import { compose } from 'redux';
import Translation from '../../../../../../../components/translation';
import ClearIcon from '../../../../../../../images/icon-clear.inline.svg';
import SC from './styled';

interface ExternalProps {
  value?: string;
  placeholder?: string;
  onClick: (value: string) => void;
}

interface Props extends ExternalProps {}

const FilterSearchField: FC<Props> = ({ value, placeholder, onClick }) => {
  const [inputValue, setInputValue] = useState(value ?? '');

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      onClick(inputValue);
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.target.value);
  };

  const clear = () => {
    setInputValue('');
    onClick('');
  };

  return (
    <SC.TextField>
      <SC.Input
        type='text'
        value={inputValue}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
      />
      <SC.SearchButton type='button' onClick={() => onClick(inputValue)}>
        <Translation id='filter.search' />
      </SC.SearchButton>
      <SC.ClearButton type='reset' onClick={clear}>
        <ClearIcon />
      </SC.ClearButton>
    </SC.TextField>
  );
};

export default compose<FC<ExternalProps>>(memo)(FilterSearchField);
