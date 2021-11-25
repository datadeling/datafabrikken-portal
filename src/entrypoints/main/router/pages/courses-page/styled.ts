import styled from 'styled-components';

import { Colour, theme, Unit } from '../../../app/theme';
import ContainerSC from '../../../../../components/container/styled';
import { SC as InfoBoxSC } from '../../../../../components/info-box';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)`
  padding-top: ${theme.spacing('S4')};
  ${onMobileView} {
    padding-top: ${theme.spacing('S2')};
  }
`;

const CourseSection = styled.section`
  padding: ${theme.spacing('S32')} 0px;
  background-color: ${theme.colour(Colour.BLUE, 'B52')};
  display: flex;
`;

const CourseCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.section`
  padding-bottom: ${theme.spacing('S32')};
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
`;

const Header = styled.h1`
  margin-bottom: ${theme.spacing('S10')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  font-weight: ${theme.fontWeight('FW400')};
  margin-bottom: ${theme.spacing('S4')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
    word-break: break-word;
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSize('FS16')};
  line-height: ${theme.fontSize('FS24')};

  ${onMobileView} {
    font-size: ${theme.fontSize('FS14')};
  }
`;

const Body = styled(ContainerSC.Container)`
  font-size: ${theme.fontSize('FS12')};
  line-height: ${theme.fontSize('FS20')};

  ${onMobileView} {
    font-size: ${theme.fontSize('FS10')};
    padding: 0 ${theme.spacing('S20')};
  }
  margin-bottom: ${theme.spacing('S10')};
  & h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${theme.spacing('S6')};
    margin-top: ${theme.spacing('S16')};
  }
  & h2 {
    font-size: ${theme.fontSize('FS20')};
  }
  & h3 {
    font-size: ${theme.fontSize('FS16')};
  }
  & h4 {
    font-size: ${theme.fontSize('FS14')};
  }
  & h5 {
    font-size: ${theme.fontSize('FS12')};
  }
  & h6 {
    font-size: ${theme.fontSize('FS10')};
  }
  & p {
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
  & div {
    & > div {
      margin-bottom: ${theme.spacing('S10')};
      & > * > a {
        align-items: center;
        border-bottom: 3px solid ${theme.colour(Colour.BLUE, 'B14')};
        display: inline-flex;
      }
    }
  }
  & ol,
  ul {
    margin-left: ${theme.spacing('S8')};
    margin-bottom: ${theme.spacing('S10')};
  }
  & ul {
    list-style: disc;
  }
  & ol {
    list-style: decimal;
  }

  & blockquote {
    font-size: ${theme.fontSize('FS16')};
    font-style: italic;
    line-height: ${theme.fontSize('FS28')};
    border-left: 3px solid ${theme.colour(Colour.BLUE, 'B14')};
    padding: 0 ${theme.spacing('S16')};

    & > p {
      padding-bottom: 0;
    }

    ${onMobileView} {
      padding: 0 ${theme.spacing('S4')};
      font-size: ${theme.fontSize('FS12')};
      line-height: ${theme.fontSize('FS20')};
    }
  }

  & ${InfoBoxSC.InfoBox.InfoBox} {
    background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};

    & ${InfoBoxSC.InfoBox.ContentWrapper} {
      margin: 0;
      & * {
        margin: 0;
        padding: 0;
      }
    }
  }
`;

const LinkBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${onMobileView} {
    flex-direction: column;
  }
`;

export default {
  Container,
  CourseSection,
  Content,
  Header,
  Title,
  Subtitle,
  CourseCardContainer,
  Body,
  LinkBoxContainer
};
