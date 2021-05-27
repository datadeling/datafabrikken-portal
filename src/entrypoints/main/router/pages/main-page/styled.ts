import styled from 'styled-components';
import { ParallaxBanner as ParallaxBannerBase } from 'react-scroll-parallax';

import NatureImage from '../../../../../images/nature.jpg';

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
  color: ${({ theme }) => theme.colour.neutral.N10};
  font-size: 3rem;
`;

const MainPage = styled.article`
  background-color: ${({ theme }) => theme.colour.neutral.N60};
  display: flex;
  flex-direction: column;
  height: 500vh;
  padding-top: 5em;
`;

const ParallaxBanner = styled(ParallaxBannerBase)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 5em;
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
      margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Banner = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 25vh;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 15em;
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
