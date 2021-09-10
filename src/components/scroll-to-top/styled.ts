import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const ScrollToTop = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing('S20')};
  margin-top: ${theme.spacing('S20')};
  z-index: 10;
`;

const ScrollButton = styled.button`
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  border: 1px solid ${theme.colour(Colour.BLUE, 'B20')};
  border-radius: 2px;
  color: currentColor;
  cursor: pointer;
  display: flex;
  font-size: ${theme.fontSize('FS12')};
  justify-content: center;
  outline: none;
  padding: ${theme.spacing('S10')} ${theme.spacing('S20')};
  & > svg {
    margin-left: ${theme.spacing('S6')};
    width: 26px;
  }

  &:hover {
    & > svg * {
      animation-play-state: running !important;
    }
  }
`;

export default { ScrollToTop, ScrollButton };
