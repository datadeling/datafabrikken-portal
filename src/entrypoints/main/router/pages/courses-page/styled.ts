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

const CourseSection = styled.section`
  padding: ${theme.spacing('S32')} 0px;
  background-color: ${theme.colour(Colour.BLUE, 'B54')};
  display: flex;
`;

const CourseCardContainer = styled.div`
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

const Header = styled.section`
  margin-bottom: ${theme.spacing('S10')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
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

export default {
  Container,
  CourseSection,
  Content,
  Header,
  Title,
  Subtitle,
  CourseCardContainer
};
