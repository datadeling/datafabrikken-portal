import { keyframes } from 'styled-components';

export interface AnimateProps {
  animate?: boolean;
}

export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-30vw);
    visibility: hidden;
    opacity: 0;
  }
  
  20% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
    transform: translateX(0vw);
  }
`;
