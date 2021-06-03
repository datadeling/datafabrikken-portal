import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 300px;
  padding: 4em 0;
  background: ${theme.colour(Colour.NEUTRAL, 'N60')};

  ${onMobileView} {
    padding: 3em 0;
    & {
      height: calc(55px + (200 - 55) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1140px;
  margin: 0 auto;

  ${onMobileView} {
    & {
      margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${theme.colour(Colour.BLUE, 'B70')};
`;

const ByLine = styled.div`
  background: ${theme.colour(Colour.NEUTRAL, 'N50')};
  color: ${theme.colour(Colour.NEUTRAL, 'N10')};
  display: flex;
  justify-content: center;
  margin-top: 5em;
  padding: 3em 0;
`;

export default { Footer, Content, Title, ByLine };
