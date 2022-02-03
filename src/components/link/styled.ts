import styled, { css } from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

import { Variant } from './enums';

type linkProps = {
  $variant?: Variant;
  $external: boolean;
};

const Link = styled.a<linkProps>`
  align-items: center;
  align-self: flex-start;
  cursor: pointer;
  display: inline-flex;
  font-weight: ${theme.fontWeight('FW400')};

  ${({ $variant }) => {
    switch ($variant) {
      case Variant.PRIMARY:
        return css`
          padding: ${theme.spacing('S10')};
          background-color: ${theme.colour(Colour.BLUE, 'B16')};
          color: ${theme.colour(Colour.BLUE, 'B52')};
        `;
      default:
        return css`
          color: ${theme.colour(Colour.BLUE, 'B16')};
          &:hover {
            text-decoration: underline;
          }
        `;
    }
  }}

  & > svg {
    width: 20px;
  }

  &:hover {
    & > svg * {
      animation-play-state: running !important;
    }
  }
`;

export default { Link };
