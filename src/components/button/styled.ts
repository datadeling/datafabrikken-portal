import styled, { css } from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

type buttonProps = {
  $active: boolean;
};

const Button = styled.button<buttonProps>`
  align-items: center;
  align-self: flex-start;
  cursor: pointer;
  display: inline-flex;
  background: transparent;
  font-weight: ${theme.fontWeight('FW300')};
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  border: 0;
  border-bottom: 3px solid transparent;

  ${({ $active }) =>
    $active &&
    css`
      border-bottom: 3px solid rgb(158, 190, 255);
    `}
`;

export default { Button };
