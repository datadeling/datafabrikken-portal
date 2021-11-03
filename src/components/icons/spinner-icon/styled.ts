import styled from 'styled-components';
import { Colour, theme } from '../../../entrypoints/main/app/theme';

import SpinnerBase from '../../../images/spinner.inline.svg';

const SpinnerIcon = styled(SpinnerBase)`
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  & .path {
    stroke: ${theme.colour(Colour.BLUE, 'B20')};
    stroke-width: 6px;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  animation: rotate 2s linear infinite;
  width: 150px;
  height: 150px;
`;

export default { SpinnerIcon };
