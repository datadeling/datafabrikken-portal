import styled, { css } from 'styled-components';
import { ParallaxBanner as ParallaxBannerBase } from 'react-scroll-parallax';

import { Colour, theme } from '../../../app/theme';

import NatureImage from '../../../../../images/nature.jpg';
import { AnimateProps, slideInFromLeft } from '../../../../../utils/animations';

const onMobileView = '@media (max-width: 900px)';

const MainPageFeatureToggleOff = styled.article`
  background-image: url(${NatureImage});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${theme.colour(Colour.NEUTRAL, 'N10')};
  font-size: ${theme.fontSize('FS32')};
`;

const MainPage = styled.article`
  background-color: ${theme.colour(Colour.NEUTRAL, 'N60')};
  display: flex;
  flex-direction: column;
  height: 500vh;
  padding-top: ${theme.spacing('S50')};
`;

const ParallaxBanner = styled(ParallaxBannerBase)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${theme.spacing('S50')};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1140px;
  z-index: 10;

  @media (max-width: 1204px) {
    & {
      width: 100%;
    }
  }

  ${onMobileView} {
    & {
      padding: 0 ${theme.spacing('S10')};
    }
  }
`;

const Banner = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 25vh;
`;

const Row = styled.div<AnimateProps>`
  display: flex;
  margin-bottom: 15em;
  visibility: hidden;
  opacity: 0;
  will-change: transform, opacity, visibility;
  animation-delay: 200ms;
  ${({ animate }) =>
    animate &&
    css`
      animation-duration: 700ms;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      animation-name: ${slideInFromLeft};
    `}
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  & > ${Row} {
    &:nth-child(odd) {
      justify-content: flex-end;
    }
  }
`;

export default {
  MainPageFeatureToggleOff,
  Title,
  Container,
  ParallaxBanner,
  MainPage,
  Banner,
  MainContent,
  Row
};
