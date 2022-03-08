import styled from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

type infoBoxTitleProps = {
  $invertColor?: boolean;
};

const Title = styled.div<infoBoxTitleProps>`
  display: block;
  font-size: ${theme.fontSize('FS16')};
  font-weight: ${theme.fontWeight('FW400')};
  margin-bottom: ${theme.spacing('S8')};
  color: ${({ $invertColor }) =>
    $invertColor
      ? theme.colour(Colour.BLUE, 'B38')
      : theme.colour(Colour.BLUE, 'B16')};

  & > h1,
  h2,
  h3,
  h4,
  h5 {
    display: inline;
  }

  & > h1 {
    font-size: ${theme.fontSize('FS32')};
  }

  & > h2 {
    font-size: ${theme.fontSize('FS28')};
  }

  & > h3 {
    font-size: ${theme.fontSize('FS16')};
  }

  & > h4 {
    font-size: ${theme.fontSize('FS14')};
  }

  & > svg {
    vertical-align: text-bottom;
    height: 25px;
    width: 25px;
  }
`;

export default { Title };
