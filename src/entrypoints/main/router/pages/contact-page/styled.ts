import styled from 'styled-components';

import { Colour, theme } from '../../../app/theme';
import ContainerSC from '../../../../../components/container/styled';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)`
  padding-top: ${theme.spacing('S4')};
  ${onMobileView} {
    padding-top: ${theme.spacing('S2')};
  }
`;

const Content = styled.section`
  padding-bottom: ${theme.spacing('S32')};
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
`;

const Header = styled.h1`
  margin-bottom: ${theme.spacing('S40')};
  ${onMobileView} {
    margin-bottom: ${theme.spacing('S20')};
    font-size: ${theme.fontSize('FS18')};
    word-break: break-word;
  }
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

const Ingress = styled.p`
  font-size: ${theme.fontSize('FS16')};
  line-height: ${theme.fontSize('FS24')};

  ${onMobileView} {
    font-size: ${theme.fontSize('FS14')};
  }
`;

const ContactCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ContactCard = styled.div`
  display: flex;
  min-width: 300px;
  flex: 0 1 30%;
  flex-direction: column;
  margin-top: ${theme.spacing('S40')};
  margin-right: ${theme.spacing('S16')};
  margin-bottom: ${theme.spacing('S16')};
  padding: ${theme.spacing('S16')};
  border-radius: 2px;

  background-color: ${theme.colour(Colour.BLUE, 'B48')};
  font-size: ${theme.fontSize('FS12')};

  box-shadow: 2.9px 2.9px 3.6px rgba(0, 0, 0, 0.049),
    8.1px 7.9px 10px rgba(0, 0, 0, 0.07),
    19.6px 19px 24.1px rgba(0, 0, 0, 0.091), 65px 63px 80px rgba(0, 0, 0, 0.14);

  ${onMobileView} {
    flex: 0 1 100%;
  }
`;

const ContactImage = styled.img`
  background-color: ${theme.colour(Colour.BLUE, 'B20')};
  border-radius: 50%;
  width: 75%;
  margin-top: -${theme.spacing('S64')};
  margin-bottom: ${theme.spacing('S16')};

  ${onMobileView} {
    width: 50%;
    margin-top: -${theme.spacing('S48')};
  }
`;

const ContactName = styled.h3`
  font-size: ${theme.fontSize('FS18')};
  font-weight: ${theme.fontWeight('FW400')};
  margin-bottom: ${theme.spacing('S2')};
`;

const ContactEmail = styled.a`
  text-decoration: underline;
`;

const TopInfo = styled.div`
  margin-bottom: ${theme.spacing('S8')};
`;

export default {
  Container,
  Content,
  Header,
  Title,
  Ingress,
  ContactCardContainer,
  ContactCard,
  ContactImage,
  ContactName,
  ContactEmail,
  TopInfo
};
