import styled from 'styled-components';
import { Colour, theme } from '../../../app/theme';
import ContainerSC from '../../../../../components/container/styled';

import DatasetIconBase from '../../../../../images/dataset.inline.svg';
import NewIconBase from '../../../../../images/dataset-new.inline.svg';
import AuthoritativeIconBase from '../../../../../images/authority.inline.svg';
import AccessOpenIconBase from '../../../../../images/dataset-open.inline.svg';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)`
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  padding-top: ${theme.spacing('S50')};
  ${onMobileView} {
    padding-top: ${theme.spacing('S10')};
  }
`;

const Content = styled.section`
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
`;

const Banner = styled(ContainerSC.Container)`
  display: flex;
  margin-bottom: ${theme.spacing('S32')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  font-weight: ${theme.fontWeight('FW400')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
    word-break: break-word;
  }
`;

const Section = styled.section`
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
`;

const OrganizationInformation = styled.div`
  padding: ${theme.spacing('S16')} ${theme.spacing('S24')};
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};

  & > img {
    max-height: 100px;
    max-width: 300px;
    margin-bottom: ${theme.spacing('S16')};
  }

  ${onMobileView} {
    padding: ${theme.spacing('S8')} ${theme.spacing('S10')};
  }
`;

const CataloguesStatistics = styled.div`
  display: flex;
  margin: ${theme.spacing('S20')} 0;
  & > * {
    margin: ${theme.spacing('S4')};
    flex-basis: 100%;

    &:first-child {
      margin-left: 0;
      ${onMobileView} {
        margin: ${theme.spacing('S4')};
      }
    }

    &:last-child {
      margin-right: 0;
      ${onMobileView} {
        margin: ${theme.spacing('S4')};
      }
    }
  }

  ${onMobileView} {
    flex-direction: column;
  }
`;

const DatasetIcon = styled(DatasetIconBase)`
  & > path,
  circle,
  rect {
    stroke-width: 0.65px;
  }
`;

const NewIcon = styled(NewIconBase)`
  & > path,
  circle,
  rect {
    stroke-width: 0.65px;
  }
`;

const AuthoritativeIcon = styled(AuthoritativeIconBase)`
  & > path,
  circle,
  rect {
    stroke-width: 0.65px;
  }
`;

const AccessOpenIcon = styled(AccessOpenIconBase)`
  & > path,
  circle,
  rect {
    stroke-width: 0.65px;
  }
`;

const SpinnerContainer = styled.div`
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default {
  Container,
  Content,
  Banner,
  Title,
  Section,
  OrganizationInformation,
  CataloguesStatistics,
  DatasetIcon,
  NewIcon,
  AuthoritativeIcon,
  AccessOpenIcon,
  SpinnerContainer
};
