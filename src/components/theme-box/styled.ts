import styled, { css } from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

type Props = {
  checked: boolean;
};

const ThemeIcon = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  flex: 0 0 20%;
  margin-right: ${theme.spacing('S6')};
  & > svg {
    fill: ${theme.colour(Colour.BLUE, 'B16')};
  }
  ${onMobileView} {
    flex: 0 0 10%;
  }
`;

const ThemeBox = styled.div<Props>`
  cursor: pointer;
  background-color: ${({ checked }) =>
    checked
      ? theme.colour(Colour.BLUE, 'B16')
      : theme.colour(Colour.BLUE, 'B48')};
  color: ${({ checked }) =>
    checked
      ? theme.colour(Colour.NEUTRAL, 'N70')
      : theme.colour(Colour.NEUTRAL, 'N0')};
  flex: 0 0 calc(20% - 5px);
  height: 60px;
  transition: background-color 150ms ease;
  &:hover {
    ${({ checked }) =>
      !checked &&
      css`
        background-color: ${theme.colour(Colour.BLUE, 'B44')};
      `}
  }

  ${({ checked }) =>
    checked &&
    css`
      & > label > ${ThemeIcon} {
        & > svg {
          fill: ${theme.colour(Colour.NEUTRAL, 'N70')};
          & > path {
            fill: ${theme.colour(Colour.NEUTRAL, 'N70')};
          }
        }
      }
    `}
  ${onMobileView} {
    flex-direction: column;
  }
`;

const Label = styled.label`
  cursor: pointer;
  align-items: center;
  display: flex;
  padding: 0.5em;
  & > span {
    margin-left: ${theme.spacing('S4')};
  }
  & > input {
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default { ThemeBox, Label, ThemeIcon };
