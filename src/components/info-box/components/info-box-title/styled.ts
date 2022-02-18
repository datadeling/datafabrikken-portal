import styled from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

type infoBoxTitleProps = {
  $invertColor?: boolean;
};

const Title = styled.div<infoBoxTitleProps>`
  display: block;
  font-size: ${theme.fontSize('FS16')};
  color: ${({ $invertColor }) =>
    $invertColor
      ? theme.colour(Colour.BLUE, 'B38')
      : theme.colour(Colour.NEUTRAL, 'N0')};

  & > h1,
  h2,
  h3,
  h4,
  h5 {
    display: inline;
  }

  & > svg {
    vertical-align: text-bottom;
    height: 30px;
    width: 30px;
  }
`;

export default { Title };
