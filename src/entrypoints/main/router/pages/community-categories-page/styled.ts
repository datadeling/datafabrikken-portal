import styled from 'styled-components';

import { theme, Colour } from '../../../app/theme';

const onMinWidth = '@media (max-width: 1350px)';
const onMobileView = '@media (max-width: 900px)';

const Page = styled.article`
  line-height: 1.5;
  padding-top: ${theme.spacing('S50')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S10')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const Ingress = styled.p`
  font-size: ${theme.fontSize('FS16')};
  line-height: 1.5;
  margin-bottom: ${theme.spacing('S16')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS12')};
  }

  & * > a {
    align-items: center;
    align-self: flex-start;
    cursor: pointer;
    display: inline-flex;
    font-weight: ${theme.fontWeight('FW400')};

    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
    border-bottom: 3px solid rgb(158, 190, 255);

    &:after {
      content: '';
      width: 30px;
      height: 30px;
      background-image: url("data:image/svg+xml,%3Csvg id='eAnm2RwYgyV1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16' shape-rendering='geometricPrecision' text-rendering='geometricPrecision'%3E%3Cstyle%3E%3C!%5BCDATA%5B%23eAnm2RwYgyV1%7Bpointer-events: all%7D%23eAnm2RwYgyV1 * %7Banimation-play-state: paused !important%7D%23eAnm2RwYgyV1:hover * %7Banimation-play-state: running !important%7D%23eAnm2RwYgyV2_to %7Banimation: eAnm2RwYgyV2_to__to 2000ms linear infinite normal forwards%7D@keyframes eAnm2RwYgyV2_to__to %7B 0%25 %7Btransform: translate(8.268px,8.268px)%7D 0.5%25 %7Btransform: translate(8.268px,8.268px);animation-timing-function: cubic-bezier(0.42,0,0.58,1)%7D 25.5%25 %7Btransform: translate(10.268px,8.268px);animation-timing-function: cubic-bezier(0.42,0,0.58,1)%7D 45.5%25 %7Btransform: translate(9.268px,8.268px);animation-timing-function: cubic-bezier(0.42,0,0.58,1)%7D 65%25 %7Btransform: translate(10.268px,8.268px)%7D 100%25 %7Btransform: translate(8.268px,8.268px)%7D%7D%5D%5D%3E%3C/style%3E%3Cg id='eAnm2RwYgyV2_to' transform='translate(8.268,8.268)'%3E%3Cg id='eAnm2RwYgyV2' transform='translate(-8,-8)'%3E%3Cpolyline id='eAnm2RwYgyV3' points='8.5,12 12.5,8 8.5,4' fill='none' stroke='rgb(255,255,255)' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline id='eAnm2RwYgyV4' x1='3.5' y1='8' x2='12' y2='8' fill='none' stroke='rgb(255,255,255)' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 30px;
    }

    &:hover {
      &:after {
        content: '';
        width: 30px;
        height: 30px;
        background-image: url("data:image/svg+xml,%3Csvg id='eAnm2RwYgyV1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16' shape-rendering='geometricPrecision' text-rendering='geometricPrecision'%3E%3Cstyle%3E%3C!%5BCDATA%5B%23eAnm2RwYgyV1%7Bpointer-events: all%7D%23eAnm2RwYgyV1 * %7Banimation-play-state: running !important%7D%23eAnm2RwYgyV1:hover * %7Banimation-play-state: running !important%7D%23eAnm2RwYgyV2_to %7Banimation: eAnm2RwYgyV2_to__to 2000ms linear infinite normal forwards%7D@keyframes eAnm2RwYgyV2_to__to %7B 0%25 %7Btransform: translate(8.268px,8.268px)%7D 0.5%25 %7Btransform: translate(8.268px,8.268px);animation-timing-function: cubic-bezier(0.42,0,0.58,1)%7D 25.5%25 %7Btransform: translate(10.268px,8.268px);animation-timing-function: cubic-bezier(0.42,0,0.58,1)%7D 45.5%25 %7Btransform: translate(9.268px,8.268px);animation-timing-function: cubic-bezier(0.42,0,0.58,1)%7D 65%25 %7Btransform: translate(10.268px,8.268px)%7D 100%25 %7Btransform: translate(8.268px,8.268px)%7D%7D%5D%5D%3E%3C/style%3E%3Cg id='eAnm2RwYgyV2_to' transform='translate(8.268,8.268)'%3E%3Cg id='eAnm2RwYgyV2' transform='translate(-8,-8)'%3E%3Cpolyline id='eAnm2RwYgyV3' points='8.5,12 12.5,8 8.5,4' fill='none' stroke='rgb(255,255,255)' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline id='eAnm2RwYgyV4' x1='3.5' y1='8' x2='12' y2='8' fill='none' stroke='rgb(255,255,255)' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 30px;
      }
    }
  }
`;

const IngressRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${theme.spacing('S32')};
`;

const IconWrapper = styled.div`
  display: flex;
  flex: 0 0 20%;
  margin-left: ${theme.spacing('S64')};
  ${onMinWidth} {
    display: none;
  }
  & > svg {
    flex-basis: 100%;
    fill: ${theme.colour(Colour.BLUE, 'B20')};
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default {
  Page,
  Title,
  IconWrapper,
  Ingress,
  IngressRow,
  Content
};
