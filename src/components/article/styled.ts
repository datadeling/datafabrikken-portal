import styled from 'styled-components';

import ContainerSC from '../container/styled';

import { Colour, theme, Unit } from '../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const Article = styled.article`
  line-height: 1.5;
  margin-bottom: ${theme.spacing('S50')};
`;

const Container = styled(ContainerSC.Container)`
  padding-top: ${theme.spacing('S50')};
  ${onMobileView} {
    padding-top: ${theme.spacing('S10')};
  }
`;

const Header = styled.section`
  background-color: ${theme.colour(Colour.BLUE, 'B54')};
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  padding-bottom: ${theme.spacing('S20')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S10')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const Ingress = styled.div`
  font-size: ${theme.fontSize('FS16')};
  line-height: 1.5;
  margin-bottom: ${theme.spacing('S16')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS12')};
  }
`;

const Body = styled.div`
  font-size: ${theme.fontSize('FS12')};
  line-height: 1.25;

  ${onMobileView} {
    font-size: ${theme.fontSize('FS10')};
  }
  margin-bottom: ${theme.spacing('S10')};
  & > div > h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${theme.spacing('S4')};
  }
  & > div > h2 {
    font-size: ${theme.fontSize('FS20')};
  }
  & > div > h3 {
    font-size: ${theme.fontSize('FS16')};
  }
  & > div > h4 {
    font-size: ${theme.fontSize('FS14')};
  }
  & > div > h5 {
    font-size: ${theme.fontSize('FS12')};
  }
  & > div > h6 {
    font-size: ${theme.fontSize('FS10')};
  }
  & > div > p {
    margin-bottom: ${theme.spacing('S20')};
    padding-bottom: 0;
    & > a {
      text-decoration: underline;
    }
    & > a.arrow {
      align-items: center;
      display: inline-flex;
      &:after {
        font-family: 'Material Icons';
        content: '\\e5c8';
        font-size: ${theme.fontSize('FS12', Unit.EM)};
        margin-left: ${theme.spacing('S4')};
      }
    }
    & code {
      font: 'Roboto Mono, monospace';
    }
    & em {
      font-style: italic;
    }
  }
  & > div {
    & > div {
      margin-bottom: ${theme.spacing('S10')};
      & > * > a {
        align-items: center;
        text-decoration: underline;
        display: inline-flex;
      }
    }
  }
  & > div > ol,
  ul {
    margin-left: 2em;
  }
  & > div > ul {
    list-style: disc;
  }
  & > div > ol {
    list-style: decimal;
  }
`;

const Quote = styled.div`
  //border-left: 3px solid ${theme.colour(Colour.BLUE, 'B16')};
  text-decoration: underline;
  font-size: ${theme.fontSize('FS20')};
  font-style: italic;
  line-height: 1.5;
  padding: ${theme.spacing('S6')} ${theme.spacing('S10')};
  margin-bottom: ${theme.spacing('S16')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS14')};
  }

  & p {
    padding: 0;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: ${theme.spacing('S16')};
`;

const Image = styled.img`
  max-width: 100%;
`;

const ImageText = styled.span`
  font-size: 0.9rem;
`;

const InfoBoxWrapper = styled.div`
  margin-bottom: ${theme.spacing('S20')};
`;

export default {
  Article,
  Container,
  Header,
  Title,
  Ingress,
  Body,
  Quote,
  ImageWrapper,
  Image,
  ImageText,
  InfoBoxWrapper
};
