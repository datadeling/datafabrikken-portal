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
  & > h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${theme.spacing('S4')};
  }
  & > h2 {
    font-size: ${theme.fontSize('FS20')};
  }
  & > h3 {
    font-size: ${theme.fontSize('FS16')};
  }
  & > h4 {
    font-size: ${theme.fontSize('FS14')};
  }
  & > h5 {
    font-size: ${theme.fontSize('FS12')};
  }
  & > h6 {
    font-size: ${theme.fontSize('FS10')};
  }
  & > p {
    margin-bottom: ${theme.spacing('S20')};
    & > a {
      border-bottom: 3px solid ${theme.colour(Colour.BLUE, 'B14')};
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
        border-bottom: 3px solid ${theme.colour(Colour.BLUE, 'B14')};
        display: inline-flex;
      }
    }
  }
  & > ol,
  ul {
    margin-left: 2em;
  }
  & > ul {
    list-style: disc;
  }
  & > ol {
    list-style: decimal;
  }
`;

const Quote = styled.div`
  border-left: 3px solid ${theme.colour(Colour.BLUE, 'B14')};
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
  ImageText
};
