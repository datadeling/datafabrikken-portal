import styled, { css } from 'styled-components';
import UpIconBase from '../../../images/up-onmouseover.inline.svg';

const UpIcon = styled(UpIconBase)`
  ${css`
    @keyframes eDW8JOY9hUX2_to__to {
      0% {
        transform: translate(8px, 8px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      20% {
        transform: translate(8px, 6px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      36% {
        transform: translate(8px, 7px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      52% {
        transform: translate(8px, 6px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      68% {
        transform: translate(8px, 7px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      84% {
        transform: translate(8px, 6px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      100% {
        transform: translate(8px, 8px);
      }
    }
    & * {
      animation-play-state: paused !important;
    }
    &:hover * {
      animation-play-state: running !important;
    }
    & > g * {
      stroke: currentColor;
    }
  `}
`;

export default { UpIcon };
