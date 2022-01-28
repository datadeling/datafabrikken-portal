import styled from 'styled-components';
import { Colour, theme } from '../../../../../entrypoints/main/app/theme';

const BigButton = styled.button<{ $inverse?: boolean }>`
  cursor: pointer;
  border: 1px solid;
  border-radius: 2px;
  border-color: ${({ $inverse }) =>
    $inverse ? theme.colour(Colour.BLUE, 'B44') : 'transparent'};

  padding: ${theme.spacing('S8')} ${theme.spacing('S24')};
  background-color: ${({ $inverse }) =>
    $inverse
      ? theme.colour(Colour.NEUTRAL, 'N0')
      : theme.colour(Colour.BLUE, 'B44')};

  color: ${({ $inverse }) =>
    $inverse
      ? theme.colour(Colour.BLUE, 'B44')
      : theme.colour(Colour.NEUTRAL, 'N0')};

  & path {
    stroke: ${({ $inverse }) =>
      $inverse
        ? theme.colour(Colour.BLUE, 'B44')
        : theme.colour(Colour.NEUTRAL, 'N0')};
  }

  &:hover {
    color: ${({ $inverse }) =>
      $inverse
        ? theme.colour(Colour.NEUTRAL, 'N0')
        : theme.colour(Colour.BLUE, 'B44')};
    background-color: ${({ $inverse }) =>
      $inverse
        ? theme.colour(Colour.BLUE, 'B44')
        : theme.colour(Colour.BLUE, 'B20')};

    & path {
      stroke: ${({ $inverse }) =>
        $inverse
          ? theme.colour(Colour.NEUTRAL, 'N0')
          : theme.colour(Colour.BLUE, 'B44')};
    }
  }
`;

const UnderlineButton = styled.button`
  cursor: pointer;
  border: none;
  border-bottom: 2px solid ${theme.colour(Colour.BLUE, 'B44')};
  color: ${theme.colour(Colour.BLUE, 'B44')};
  background: none;
  margin: ${theme.spacing('S4')};
  white-space: nowrap;

  & path {
    stroke: ${theme.colour(Colour.BLUE, 'B44')};
  }
  &:hover {
    border-bottom: 2px solid transparent;
  }
`;

export default {
  BigButton,
  UnderlineButton
};
