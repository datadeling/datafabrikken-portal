import styled from 'styled-components';

import ContainerSC from '../../../../../components/container/styled';

import InfoBoxSC from '../../../../../components/info-box/components/info-box/styled';

import { theme, Colour } from '../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)`
  width: 100%;

  @media (max-width: 1251px) {
    & {
      width: 100%;
      padding: 0;
    }
  }

  ${onMobileView} {
    & {
      padding: 0;
    }
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing('S96')};

  & > ${InfoBoxSC.InfoBox} {
    margin: ${theme.spacing('S8')};
    & > ${InfoBoxSC.InfoBoxRow} {
      & > ${InfoBoxSC.IconWrapper} {
        & svg {
          fill: none;
          min-width: 120px;
        }
      }
    }
  }

  ${onMobileView} {
    flex-direction: column;
    margin-bottom: ${theme.spacing('S32')};
  }
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const BannerSection = styled.section`
  display: flex;
  width: 1200px;
  height: 100vh;
  padding-top: 25vh;
  margin: 0 auto;

  & > ${Row} {
    & > div:last-child {
      position: relative;
      top: -100px;
      width: 700px;
      height: 700px;
      z-index: -1;
    }
  }

  @media (max-width: 1251px) {
    & {
      width: 100%;
      padding: ${theme.spacing('S50')} ${theme.spacing('S10')}
        ${theme.spacing('S10')} ${theme.spacing('S10')};

      background: none;

      & > ${Row} {
        flex-direction: column;

        & > div:last-child {
          top: 0;
          width: 90%;
          height: 90%;
        }
      }
    }
  }

  ${onMobileView} {
    & > ${Row} {
      flex-direction: column;

      & > div:last-child {
        display: none;
      }
    }
  }
`;

const MainContentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: linear-gradient(
    ${theme.colour(Colour.BLUE, 'B50')},
    ${theme.colour(Colour.BLUE, 'B54')}
  );
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;

  & > ${Row} {
    &:first-child {
      margin-top: ${theme.spacing('S88')};
      justify-content: center;
    }
  }

  @media (max-width: 1251px) {
    & {
      width: 100%;
      padding: ${theme.spacing('S10')};
    }
  }

  ${onMobileView} {
    & > ${Row} {
      &:first-child {
        margin-top: ${theme.spacing('S24')};
        justify-content: center;
      }
    }
  }
`;

const IllustrationBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing('S10')};

  & > svg {
    margin-right: ${theme.spacing('S10')};
  }

  ${onMobileView} {
    flex-direction: column;
    align-items: flex-start;
    & > svg {
      margin-right: 0;
    }
  }
`;

const IllustrationContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing('S10')};
  margin-bottom: ${theme.spacing('S96')};

  ${onMobileView} {
    flex-direction: column;
    margin-bottom: ${theme.spacing('S32')};
  }
`;

const Topics = styled.div`
  flex-direction: column;
  width: 80%;

  & > div:not(:first-child) {
    margin: ${theme.spacing('S4')} 0;
  }

  & > a {
    margin: ${theme.spacing('S10')} 0 0 ${theme.spacing('S10')};
  }

  & > ${IllustrationBox} {
    & > svg {
      min-width: 165px;
    }
  }

  ${onMobileView} {
    width: 100%;
  }
`;

const Teaser = styled.div`
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  & > ${IllustrationBox} {
    & > svg {
      margin-right: ${theme.spacing('S24')};
    }
  }

  & ul > li {
    margin-bottom: 12px;
    margin-left: 0px !important;
    display: flex;
    align-items: center;
    list-style: none !important;
  }

  & ul > li::before {
    color: transparent;
    font-size: 1px;
    content: '';
    margin-right: 15px;
    padding: 18px 10px;
    background-image: url('data:image/svg+xml, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%2010.515L10.53%2016.485L19.5%207.51501%22%20stroke%3D%22white%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A');
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: center top;
  }

  ${onMobileView} {
    & h2 {
      font-size: ${theme.fontSize('FS16')};
    }

    & ul > li {
      font-size: ${theme.fontSize('FS10')};
    }
  }
`;

const ArrowDown = styled.div`
  display: flex;
  justify-content: center;
  transform: translateX(-50%);
  position: absolute;
  bottom: ${theme.spacing('S24')};
  left: calc(50% - 26px);
  background-color: ${theme.colour(Colour.BLUE, 'B50')};
  border-radius: 50%;
  width: 52px;
  height: 52px;

  animation: arrowdown 2500ms linear infinite normal forwards;

  & > svg {
    width: 35px;
  }

  @keyframes arrowdown {
    0% {
      transform: translate(8px, 7px);
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
    20% {
      transform: translate(8px, 11px);
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
    36% {
      transform: translate(8px, 8px);
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
    52% {
      transform: translate(8px, 11px);
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
    68% {
      transform: translate(8px, 8px);
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
    84% {
      transform: translate(8px, 11px);
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
    100% {
      transform: translate(8px, 7px);
    }
  }
`;

export default {
  Container,
  Title,
  BannerSection,
  MainContentSection,
  MainContent,
  IllustrationBox,
  IllustrationContent,
  Row,
  NewsRow,
  Topics,
  Teaser,
  ArrowDown
};
