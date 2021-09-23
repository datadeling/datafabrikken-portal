import styled from 'styled-components';
import { theme, Colour } from '../../../entrypoints/main/app/theme';

const Tag = styled.span`
  padding: 8px 12px 9px 12px;
  background-color: ${theme.colour(Colour.BLUE, 'B04')};
  border-radius: 50px;
  font-weight: ${theme.fontWeight('FW400')};
  color: ${theme.colour(Colour.BLUE, 'B36')};

  &:hover {
    background-color: ${theme.colour(Colour.BLUE, 'B36')};
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
    text-decoration: none;
  }
`;

export default { Tag };
