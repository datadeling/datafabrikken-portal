import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const InternalLink = styled.div`
  color: ${theme.colour(Colour.BLUE, 'B38')};
  & > svg {
    width: 20px;
    vertical-align: middle;
  }
`;

const RouterLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export default { InternalLink, RouterLink };
