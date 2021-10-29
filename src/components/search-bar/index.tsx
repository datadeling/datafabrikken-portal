import React, { FC, FormEvent, useCallback, useState } from 'react';

import SC from './styled';
import { getParameter } from '../../utils/location-helper';

interface Props {
  placeholder: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onClear: () => void;
  onChange?: (input: string) => void;
  hideSearchIcon?: boolean;
}

const SearchBar: FC<Props> = ({
  placeholder,
  onSubmit,
  onClear,
  onChange,
  hideSearchIcon
}) => {
  const [searchQuery, setSearchQuery] = useState<string>(getParameter('q'));

  const clearSearchField = useCallback((e: FormEvent) => {
    e.preventDefault();
    setSearchQuery('');
    onClear();
  }, []);

  return (
    <SC.SearchBar onSubmit={onSubmit}>
      <SC.SearchField
        id='searchBox'
        autoComplete='off'
        placeholder={placeholder}
        type='search'
        value={searchQuery}
        onChange={({ currentTarget }) => {
          setSearchQuery(currentTarget.value ?? '');
          if (onChange) {
            onChange(currentTarget.value ?? '');
          }
        }}
      />
      {searchQuery && (
        <SC.ClearButton type='button' onClick={clearSearchField}>
          <SC.ClearIcon />
        </SC.ClearButton>
      )}
      {hideSearchIcon ? null : (
        <SC.SearchButton>
          <SC.SearchIcon />
        </SC.SearchButton>
      )}
    </SC.SearchBar>
  );
};

export default SearchBar;
