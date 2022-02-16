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

const GuideSection = styled.section`
  padding: ${theme.spacing('S32')} 0px;
  background-color: ${theme.colour(Colour.BLUE, 'B54')};
  display: flex;

  & h2 {
    margin-bottom: ${theme.spacing('S10')};
    font-size: ${theme.fontSize('FS24')};
    font-weight: ${theme.fontWeight('FW400')};
    margin-bottom: ${theme.spacing('S4')};
    ${onMobileView} {
      font-size: ${theme.fontSize('FS18')};
      word-break: break-word;
    }
  }
`;

const GuideCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing('S16')};
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
  max-width: 800px;

  ${onMobileView} {
    font-size: ${theme.fontSize('FS14')};
  }
`;

const InfoBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing('S10')};
`;

const RadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing('S20')};
  & > label {
    margin-right: ${theme.spacing('S12')};
  }
`;

export default {
  Container,
  GuideSection,
  Content,
  Header,
  Title,
  Subtitle,
  GuideCardContainer,
  InfoBoxContainer,
  RadioContainer
};
