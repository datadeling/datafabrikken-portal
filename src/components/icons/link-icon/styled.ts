import styled, { keyframes } from 'styled-components';
import LinkIconBase from '../../../images/icon-arrow-right-regular.inline.svg';

const animation = keyframes`
  0% {
    transform: translate(0px,0px);
    animation-timing-function: cubic-bezier(0.42,0,0.58,1);
  } 
  20% {
    transform: translate(3px,0px);
    animation-timing-function: cubic-bezier(0.42,0,0.58,1);
  } 
  36% {
    transform: translate(1px,0px);
    animation-timing-function: cubic-bezier(0.42,0,0.58,1);
  } 
  52% {
    transform: translate(3px,0px);
    animation-timing-function: cubic-bezier(0.42,0,0.58,1);
  } 
  68% {
    transform: translate(1px,0px);
    animation-timing-function: cubic-bezier(0.42,0,0.58,1);
  } 
  84% {
    transform: translate(3px,0px);
    animation-timing-function: cubic-bezier(0.42,0,0.58,1);
  } 
  100% {
    transform: translate(0px,0px);
  }  
`;

const LinkIcon = styled(LinkIconBase)`
  animation-play-state: paused;
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-name: ${animation};

  & > path {
    fill: currentColor;
  }
`;

export default { LinkIcon };
