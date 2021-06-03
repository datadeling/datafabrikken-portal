import styled from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

const ContentBoxBody = styled.div`
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  font-size: 1.2rem;
  display: flex;
  line-height: 1.5;
`;

export default { ContentBoxBody };
