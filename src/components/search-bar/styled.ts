import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

import SearchSVG from '../../images/icon-search-md.inline.svg';

const onMobileView = '@media (max-width: 900px)';

const SearchBar = styled.form`
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  display: flex;
  flex: 0 0 60%;
  border: 1px solid ${theme.colour(Colour.NEUTRAL, 'N70')};
  border-radius: 5px;
  align-items: center;
  ${onMobileView} {
    & {
      flex: 1;
    }
  }
`;

const SearchField = styled.input`
  border: none;
  background-color: transparent;
  display: flex;
  flex: 1 1;
  font-size: ${theme.fontSize('FS16')};
  padding: ${theme.spacing('S10')};

  &:focus {
    outline: none;
  }

  ${onMobileView} {
    & {
      font-size: ${theme.fontSize('FS12')};
    }
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: ${theme.spacing('S10')};
  outline: none;
`;

const SearchIcon = styled(SearchSVG)`
  width: 2em;
`;

export default { SearchBar, SearchField, SearchButton, SearchIcon };
