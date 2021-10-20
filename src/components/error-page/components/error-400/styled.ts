import styled from 'styled-components';
import { theme } from '../../../../entrypoints/main/app/theme';
import Error404IconBase from '../../../../images/illustration-404.inline.svg';
import InternalLink from '../../../link-internal';

const onMobileView = '@media (max-width: 900px)';

const Error404Icon = styled(Error404IconBase)`
  height: 250px;
  width: 250px;
  margin: ${theme.spacing('S16')};

  & path,
  circle {
    stroke-width: 1px;
  }

  @keyframes eWDRH4dIksG37_to__to {
    0% {
      transform: translate(13.93px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    8.333333% {
      transform: translate(8.93px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    18.333333% {
      transform: translate(8.999905px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    26.666667% {
      transform: translate(19.999905px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    38.333333% {
      transform: translate(19.999905px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    55% {
      transform: translate(13.93px, 43.299999px);
    }
    100% {
      transform: translate(13.93px, 43.299999px);
    }
  }
  #eWDRH4dIksG37_ts {
    animation: eWDRH4dIksG37_ts__ts 6000ms linear infinite normal forwards;
  }
  @keyframes eWDRH4dIksG37_ts__ts {
    0% {
      transform: scale(1, 1);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    68.333333% {
      transform: scale(1, 0.1);
    }
    70% {
      transform: scale(1, 1);
    }
    71.666667% {
      transform: scale(1, 0.1);
    }
    73.333333% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  #eWDRH4dIksG38_to {
    animation: eWDRH4dIksG38_to__to 6000ms linear infinite normal forwards;
  }
  @keyframes eWDRH4dIksG38_to__to {
    0% {
      transform: translate(50.07px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    8.333333% {
      transform: translate(45px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    18.333333% {
      transform: translate(45px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    26.666667% {
      transform: translate(56.499905px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    38.333333% {
      transform: translate(56.499905px, 43.299999px);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    55% {
      transform: translate(50.07px, 43.299999px);
    }
    100% {
      transform: translate(50.07px, 43.299999px);
    }
  }
  #eWDRH4dIksG38_ts {
    animation: eWDRH4dIksG38_ts__ts 6000ms linear infinite normal forwards;
  }
  @keyframes eWDRH4dIksG38_ts__ts {
    0% {
      transform: scale(1, 1);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    68.333333% {
      transform: scale(1, 0.1);
    }
    70% {
      transform: scale(1, 1);
    }
    71.666667% {
      transform: scale(1, 0.1);
    }
    73.333333% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

const Error400 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: ${theme.fontSize('FS14')};
  margin: ${theme.spacing('S16')};
`;

const Link = styled(InternalLink)`
  display: flex;
  align-items: center;

  & > svg {
    width: 20px;
    height: 20px;
    margin-left: 0.3rem;
  }
  & * {
    animation-play-state: paused !important;
  }
  &:hover * {
    animation-play-state: running !important;
  }
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S2')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const SubTitle = styled.p`
  margin-bottom: ${theme.spacing('S2')};
`;

export default { Error400, Link, Error404Icon, Title, SubTitle };
