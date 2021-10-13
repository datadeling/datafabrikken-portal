import styled, { css } from 'styled-components';
import { Colour, theme } from '../../entrypoints/main/app/theme';

interface Props {
  $column?: boolean;
  $hasBorder?: boolean;
}

const List = styled.ul<Props>`
  display: flex;
  flex-wrap: wrap;
  margin: -10px -10px 0 0;
  padding: 0;
  list-style: none;
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  & > li {
    padding-top: ${({ $column }) => ($column ? '5px' : '0px')};
    border-top: ${({ $column }) =>
      $column ? `1px solid ${theme.colour(Colour.NEUTRAL, 'N20')}` : 'none'};
  }

  & > :first-child {
    border-top: 0px;
    padding-top: 0px;
  }

  ${({ $hasBorder }) =>
    $hasBorder &&
    css`
      border-top: 1px solid ${theme.colour(Colour.NEUTRAL, 'N20')};
      border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, 'N20')};
    `}
`;

const ListItem = styled.li`
  margin: ${theme.spacing('S8')};
  margin-left: 0;
`;

export default { List, ListItem };
