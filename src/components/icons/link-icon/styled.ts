import styled, { css } from 'styled-components';
import LinkIconBase from '../../../images/link-onmouseover.inline.svg';

const LinkIcon = styled(LinkIconBase)`
  ${css`
    @keyframes eAnm2RwYgyV2_to__to {
      0% {
        transform: translate(8.268px, 8.268px);
      }
      0.5% {
        transform: translate(8.268px, 8.268px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      25.5% {
        transform: translate(10.268px, 8.268px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      45.5% {
        transform: translate(9.268px, 8.268px);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      65% {
        transform: translate(10.268px, 8.268px);
      }
      100% {
        transform: translate(8.268px, 8.268px);
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

export default { LinkIcon };
