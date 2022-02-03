import styled from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

type infoBoxTitleProps = {
  $invertColor?: boolean;
};

const Title = styled.div<infoBoxTitleProps>`
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: ${theme.spacing('S8')};
  color: ${({ $invertColor }) =>
    $invertColor
      ? theme.colour(Colour.BLUE, 'B38')
      : theme.colour(Colour.BLUE, 'B16')};

  & > h2 > svg {
    width: 25px;
    vertical-align: middle;
  }
`;

export default { Title };
