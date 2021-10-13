import styled, { css } from 'styled-components';
import { Colour, theme } from '../../entrypoints/main/app/theme';

interface Props {
  highlighted?: boolean;
}

const ListItem = styled.li<Props>`
  display: flex;
  word-break: break-word;
  padding: ${theme.spacing('S10')} 0;
  background-color: transparent;
  border-top: 1px solid ${theme.colour(Colour.NEUTRAL, 'N20')};
  &:last-of-type {
    border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, 'N20')};
  }

  ${({ highlighted }) =>
    highlighted &&
    css`
      padding: ${theme.spacing('S10')};
      background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
      &:first-of-type {
        border-top: 0;
      }
      &:last-of-type {
        border-bottom: 0;
      }
    `}
`;

const Property = styled.div`
  flex-basis: 30%;
`;

const Value = styled.div`
  flex-basis: 70%;
`;

export default { ListItem, Property, Value };
