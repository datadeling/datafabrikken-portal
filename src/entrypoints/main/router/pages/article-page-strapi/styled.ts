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
`;

const Header = styled.header`
  margin-bottom: ${theme.spacing('S10')};
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  background-color: ${theme.colour(Colour.BLUE, 'B54')};
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

export default {
  Container,
  Content,
  Header,
  Title,
  Subtitle
};
