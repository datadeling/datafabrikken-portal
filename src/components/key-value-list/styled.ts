import styled from 'styled-components';
import { Colour, theme } from '../../entrypoints/main/app/theme';

interface Props {
  $highlighted?: boolean;
}

const List = styled.ul<Props>`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: ${({ $highlighted }) =>
    $highlighted ? theme.colour(Colour.NEUTRAL, 'N0') : 'transparent'};

  &:nth-of-type(n + 2) {
    margin-top: ${theme.spacing('S10')};
  }
`;

export default { List };
