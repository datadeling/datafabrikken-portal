import styled from 'styled-components';
import { Colour, theme } from '../../entrypoints/main/app/theme';

const ExternalLink = styled.a`
  border-bottom: 2px solid ${theme.colour(Colour.BLUE, 'B14')};

  & > svg {
    height: 20px;
    width: 20px;

    * {
      animation-play-state: paused !important;
    }
  }

  &:hover {
    border-bottom: 2px solid transparent;

    & > svg * {
      animation-play-state: running !important;
    }
  }
`;

export default { ExternalLink };
