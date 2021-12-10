import styled from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

type infoBoxTitleProps = {
  $invertColor?: boolean;
};

const Title = styled.div<infoBoxTitleProps>`
  align-items: flex-start;
  display: inline-flex;
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: ${theme.spacing('S8')};
  color: ${({ $invertColor }) =>
    $invertColor
      ? theme.colour(Colour.BLUE, 'B38')
      : theme.colour(Colour.NEUTRAL, 'N0')};

  & > svg {
    flex: 0 0 30px;
  }
`;

export default { Title };
