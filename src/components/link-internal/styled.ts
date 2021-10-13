import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colour, theme } from '../../entrypoints/main/app/theme';

const RouterLink = styled(Link)`
  border-bottom: 2px solid ${theme.colour(Colour.BLUE, 'B14')};
  &:hover {
    border-bottom: 2px solid transparent;
  }
`;

export default { RouterLink };
