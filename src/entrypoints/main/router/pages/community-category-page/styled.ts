import styled from 'styled-components';

import { theme, Colour } from '../../../app/theme';

import ButtonBase from '../../../../../components/button';

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

const Info = styled.p`
  margin-bottom: ${theme.spacing('S24')};
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

const Header = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing('S10')};
  justify-content: space-between;
`;

const Sort = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${theme.spacing('S10')};
`;

const SortLabel = styled.span`
  font-weight: ${theme.fontWeight('FW500')};
  padding-bottom: ${theme.spacing('S2')}; ;
`;

const SortButtonWrapper = styled.span`
  font-weight: ${theme.fontWeight('FW300')};
`;

const SortButton = styled(ButtonBase)``;

export default {
  Page,
  Title,
  Info,
  IconWrapper,
  Ingress,
  IngressRow,
  Content,
  Header,
  Sort,
  SortLabel,
  SortButtonWrapper,
  SortButton
};
