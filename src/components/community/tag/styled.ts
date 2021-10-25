import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme, Colour } from '../../../entrypoints/main/app/theme';

const Tag = styled(Link)`
  padding: ${theme.spacing('S4')} ${theme.spacing('S6')};
  background-color: ${theme.colour(Colour.BLUE, 'B04')};
  border-radius: 50px;
  font-weight: ${theme.fontWeight('FW400')};
  color: ${theme.colour(Colour.BLUE, 'B36')};
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colour(Colour.BLUE, 'B36')};
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
    text-decoration: none;
  }
`;

export default { Tag };
