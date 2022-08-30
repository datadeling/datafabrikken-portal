import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContainerSC from '../container/styled';
import { Colour, theme } from '../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)`
  flex-direction: row;
  justify-content: space-between;
  ${onMobileView} {
    flex-direction: column;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 3em 0;
  margin-top: auto;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  background: ${theme.colour(Colour.BLUE, 'B48')};

  font-size: ${theme.fontSize('FS10')};
  line-height: 1.5;

  & > span {
    text-align: center;
  }
`;

const ByLine = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  ${onMobileView} {
    flex-basis: 100%;
  }

  & > p {
    margin-bottom: ${theme.spacing('S12')};
  }
`;

const Title = styled.h3`
  font-size: ${theme.fontSize('FS12')};
  font-weight: ${theme.fontWeight('FW700')};
  color: ${theme.colour(Colour.BLUE, 'B16')};
  margin-bottom: ${theme.spacing('S8')};
`;

const PlainLink = styled.a`
  text-decoration: underline;
  display: block;
`;

const LinkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  gap: ${theme.spacing('S12')};

  justify-content: space-between;
  ${onMobileView} {
    flex-basis: 100%;
    flex-direction: column;
  }
`;

const LinkTitle = styled.h3`
  font-size: ${theme.fontSize('FS12')};
  font-weight: ${theme.fontWeight('FW400')};

  margin-bottom: ${theme.spacing('S6')};
`;

const LinkList = styled.ul`
  line-height: 2.5;
  ${onMobileView} {
    line-height: 1.5;
    margin-bottom: ${theme.spacing('S12')};
  }
`;

const LinkItem = styled(Link)`
  text-decoration: underline;
`;

const Social = styled.div`
  display: flex;
  gap: 1.5em;
  align-items: center;
`;

export default {
  Footer,
  Container,
  ByLine,
  Title,
  PlainLink,
  LinkSection,
  LinkTitle,
  LinkList,
  LinkItem,
  Social
};
