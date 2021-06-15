import styled from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

const InfoBox = styled.div`
  background-color: ${theme.colour(Colour.BLUE, 'B44')};
  display: flex;
  flex: 0 1 49%;
  flex-direction: column;
  padding: ${theme.spacing('S20')};
  &:hover {
    background-color: ${theme.colour(Colour.BLUE, 'B48')};
    transition: background-color 150ms cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
  }
`;

export default { InfoBox };
