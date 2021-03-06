import styled from 'styled-components';

import ContainerSC from '../container/styled';
import { Colour, theme } from '../../entrypoints/main/app/theme';

import authoritativeIconBase from '../../images/authoritative.inline.svg';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)`
  flex-direction: row;
  padding-top: ${theme.spacing('S50')};
  ${onMobileView} {
    padding-top: ${theme.spacing('S10')};
  }
`;

const Banner = styled(ContainerSC.Container)`
  display: flex;
  margin-bottom: ${theme.spacing('S32')};
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S2')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const SubBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSize('FS12')};
  ${onMobileView} {
    flex-direction: column;
    & > * {
      margin-top: ${theme.spacing('S2')};
    }
    font-size: ${theme.fontSize('FS10')};
  }
`;

const Content = styled.section`
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
`;

const ContentSections = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 80%;
  max-width: 80%;
  margin-bottom: ${theme.spacing('S32')};

  ${onMobileView} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const DetailsIntro = styled.div`
  font-size: ${theme.fontSize('FS12')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS10')};
  }
`;

const AuthoritativeIcon = styled(authoritativeIconBase)`
  height: 30px;
  width: 30px;
  margin-left: ${theme.spacing('S2')};
  & > path {
    stroke: ${theme.colour(Colour.NEUTRAL, 'N0')};
    stroke-width: 1px;
  }
`;

const PublisherContainer = styled.span`
  display: flex;

  & > a {
    margin-left: ${theme.spacing('S4')};
    text-decoration: underline;
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }
`;

export default {
  Container,
  Banner,
  SubBanner,
  Content,
  Title,
  ContentSections,
  DetailsIntro,
  AuthoritativeIcon,
  PublisherContainer
};
