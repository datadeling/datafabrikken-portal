import { Link } from 'react-router-dom';
import styled from 'styled-components';

const InternalLink = styled(Link)`
  text-decoration: underline;
  & > svg {
    width: 20px;
    vertical-align: text-bottom;
  }

  &:hover {
    & > svg {
      animation-play-state: running !important;
    }
  }
`;

export default { InternalLink };
