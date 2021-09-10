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
  border-bottom: 3px solid ${theme.colour(Colour.BLUE, 'B20')};
  color: currentColor;
  cursor: pointer;
  display: flex;
  font-size: ${theme.fontSize('FS12')};
  justify-content: center;
  outline: none;
  &:after {
    font-family: 'Material Icons';
    content: '\\e5d8';
    font-size: ${theme.fontSize('FS12')};
    margin-left: ${theme.spacing('S2')};
  }
`;

export default { ScrollToTop, ScrollButton };
