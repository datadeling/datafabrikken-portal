import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { theme, Colour } from '../../entrypoints/main/app/theme';
import { Variant } from './enums';

interface Props {
  variant?: Variant;
}

const RoundedTag = styled(Link)<Props>`
  align-items: center;
  border-radius: 20px;
  border: none;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  display: flex;
  font-size: ${theme.fontSize('FS10')};
  font-weight: ${theme.fontWeight('FW300')};
  margin-right: ${theme.spacing('S6')};
  padding: ${theme.spacing('S4')} ${theme.spacing('S6')};
  ${({ variant }) => {
    switch (variant) {
      case Variant.SECONDARY:
        return css`
          background-color: ${theme.colour(Colour.BLUE, 'B04')};
          color: ${theme.colour(Colour.BLUE, 'B36')};
        `;
      default:
        return css`
          background-color: ${theme.colour(Colour.BLUE, 'B36')};
        `;
    }
  }}
`;

export default { RoundedTag };
