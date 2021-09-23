import styled from 'styled-components';

import { theme, Colour } from '../../../app/theme';

const onMinWidth = '@media (max-width: 1350px)';
const onMobileView = '@media (max-width: 900px)';

const Page = styled.article`
  line-height: 1.5;
  padding-top: ${theme.spacing('S50')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S10')};
`;

const Ingress = styled.p`
  font-size: ${theme.fontSize('FS16')};
  line-height: 1.5;
  margin-bottom: ${theme.spacing('S16')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS12')};
  }
`;

const IngressRow = styled.div`
  display: flex;
  padding-bottom: ${theme.spacing('S32')};
`;

const IconWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  position: relative;
  right: -${theme.spacing('S56')};
  flex: 0 0 25%;
  padding-left: ${theme.spacing('S20')};
  ${onMinWidth} {
    display: none;
  }
  & > svg {
    flex-basis: 90%;
    fill: ${theme.colour(Colour.BLUE, 'B20')};
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default {
  Page,
  Title,
  IconWrapper,
  Ingress,
  IngressRow,
  Content
};
