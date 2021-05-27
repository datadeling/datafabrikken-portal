import styled from 'styled-components';
import { ParallaxBanner as ParallaxBannerBase } from 'react-scroll-parallax';

const ParallaxBanner = styled(ParallaxBannerBase)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default { ParallaxBanner };
