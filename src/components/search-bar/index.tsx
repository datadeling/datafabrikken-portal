import React, { FC, FormEvent, useState } from 'react';

import SC from './styled';
import { getParameter } from '../../utils/location-helper';

interface Props {
  placeholder: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchBar: FC<Props> = ({ placeholder, onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState<string>(getParameter('q'));

  return (
    <SC.SearchBar onSubmit={onSubmit}>
      <SC.SearchField
        id='searchBox'
        autoComplete='off'
        placeholder={placeholder}
        type='search'
        value={searchQuery}
        onChange={({ currentTarget }) =>
          setSearchQuery(currentTarget.value ?? '')
        }
      />
      <SC.SearchButton>
        <SC.SearchIcon />
      </SC.SearchButton>
    </SC.SearchBar>
  );
};

export default SearchBar;
