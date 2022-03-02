import styled from 'styled-components';
import { theme, Colour } from '../../../../../app/theme';

const TextField = styled('div')`
  display: flex;
`;

const SearchButton = styled('button')`
  display: flex;
  background-color: ${theme.colour(Colour.BLUE, 'B16')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  border-radius: 0;
  align-items: center;
  appearance: none;
  border: none;
  outline: none;
  font-weight: ${theme.fontWeight('FW100')};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  padding: ${theme.spacing('S6')} ${theme.spacing('S8')};
  margin-left: 10px;

  &:disabled {
    cursor: default;
    pointer-events: none;
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
    background: ${theme.colour(Colour.NEUTRAL, 'N30')};
  }
`;

const Input = styled('input')`
  flex: 1 0 auto;
  padding: ${theme.spacing('S6')};
  border: 1px solid;
  border-radius: 3px;

  &:focus {
    outline: none;
  }

  &:placeholder-shown + button + button {
    opacity: 0;
    pointer-events: none;
  }
`;

const ClearButton = styled('button')`
  position: relative;
  right: 85px;
  cursor: pointer;
  background: inherit;
  border: none;
  & > svg {
    width: ${theme.spacing('S8')};
    & > path {
      fill: ${theme.colour(Colour.NEUTRAL, 'N70')};
    }
  }
`;

export default { TextField, Input, ClearButton, SearchButton };
