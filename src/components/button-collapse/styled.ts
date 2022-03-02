import styled, { css } from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const CollapseButton = styled.button<{
  $caretUp: boolean;
}>`
  align-items: center;
  align-self: flex-start;
  cursor: pointer;
  display: inline-flex;
  background: transparent;
  font-weight: ${theme.fontWeight('FW300')};
  border: 0;
  margin-top: ${theme.spacing('S2')};
  border-bottom: 1px solid ${theme.colour(Colour.BLUE, 'B16')};
  color: ${theme.colour(Colour.BLUE, 'B16')};

  & > svg {
    width: 12px;
    margin-left: ${theme.spacing('S4')};
    ${({ $caretUp }) =>
      $caretUp &&
      css`
        transform: rotate(180deg);
      `}

    path {
      fill: ${theme.colour(Colour.BLUE, 'B16')};
    }
  }
`;
export default { CollapseButton };
