import styled from 'styled-components';

import { Colour, theme } from '../../entrypoints/main/app/theme';

type RootProps = {
  $invertColor?: boolean;
};

const Root = styled.main<RootProps>`
  background-color: ${({ $invertColor }) =>
    $invertColor
      ? theme.colour(Colour.BLUE, 'B02')
      : theme.colour(Colour.BLUE, 'B54')};
  color: ${({ $invertColor }) =>
    $invertColor
      ? theme.colour(Colour.BLUE, 'B52')
      : theme.colour(Colour.NEUTRAL, 'N0')};
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  word-break: break-word;
`;

export default { Root };
