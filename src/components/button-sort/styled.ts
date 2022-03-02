import styled, { css } from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const SortButton = styled.button<{
  $active: boolean;
  $arrowDown: boolean;
}>`
  align-items: center;
  align-self: flex-start;
  cursor: pointer;
  display: inline-flex;
  background: transparent;
  font-weight: ${theme.fontWeight('FW400')};
  border: 0;
  color: ${theme.colour(Colour.BLUE, 'B16')};

  & > svg {
    width: 16px;
    ${({ $arrowDown }) =>
      $arrowDown
        ? css`
            transform: rotate(90deg);
          `
        : css`
            transform: rotate(-90deg);
          `}

    path {
      fill: ${theme.colour(Colour.BLUE, 'B16')};
    }
  }

  ${({ $active }) =>
    $active &&
    css`
      border-bottom: 1px solid ${theme.colour(Colour.BLUE, 'B16')};
    `}
`;
export default { SortButton };
