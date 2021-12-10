import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

type ScrollToTopProps = {
  $invertColor?: boolean;
};

const ScrollButton = styled.button`
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: ${theme.fontSize('FS12')};
  justify-content: center;
  outline: none;
  padding: ${theme.spacing('S10')} ${theme.spacing('S20')};

  &:hover {
    & > svg * {
      animation-play-state: running !important;
    }
  }
`;

const ScrollToTop = styled.div<ScrollToTopProps>`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing('S20')};
  margin-top: ${theme.spacing('S20')};
  z-index: 10;

  ${ScrollButton} {
    color: ${({ $invertColor }) =>
      $invertColor
        ? theme.colour(Colour.BLUE, 'B38')
        : theme.colour(Colour.NEUTRAL, 'N0')};

    & > svg {
      margin-left: ${theme.spacing('S6')};
      width: 26px;
      fill: ${({ $invertColor }) =>
        $invertColor
          ? theme.colour(Colour.BLUE, 'B38')
          : theme.colour(Colour.NEUTRAL, 'N0')};
    }
  }
`;

export default { ScrollToTop, ScrollButton };
