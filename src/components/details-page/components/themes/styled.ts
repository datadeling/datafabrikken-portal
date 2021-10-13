import styled from 'styled-components';

import { Colour, theme } from '../../../../entrypoints/main/app/theme';

const Themes = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-right: -10px;

  & > * {
    padding: 8px 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-right: 10px;
    user-select: none;
    cursor: default;
  }

  & > a {
    display: inline-flex;
    align-items: center;
    color: ${theme.colour(Colour.BLUE, 'B36')};
    background: ${theme.colour(Colour.NEUTRAL, 'N02')};
    text-decoration: none;
    cursor: pointer;

    &.open-data {
      color: ${theme.colour(Colour.NEUTRAL, 'N0')};
      background: ${theme.colour(Colour.BLUE, 'B36')};
    }

    &.public-data {
      background: ${theme.colour(Colour.NEUTRAL, 'N02')};
    }

    &.restricted-data,
    &.non-public-data {
      background: ${theme.colour(Colour.NEUTRAL, 'N0')};

      & > svg > path {
        fill: ${theme.colour(Colour.BLUE, 'B36')};
      }
    }

    &:hover {
      color: ${theme.colour(Colour.NEUTRAL, 'N0')};
      background: ${theme.colour(Colour.BLUE, 'B36')};

      & > svg > path {
        fill: ${theme.colour(Colour.NEUTRAL, 'N0')};
      }
    }

    & > svg {
      display: flex;
      height: 20px;
      width: 20px;
      margin-right: 5px;

      & > path {
        fill: ${theme.colour(Colour.BLUE, 'B36')};
      }
    }
  }
`;

export default {
  Themes
};
