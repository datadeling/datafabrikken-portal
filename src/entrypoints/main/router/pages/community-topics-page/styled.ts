import styled from 'styled-components';

import { theme, Colour } from '../../../app/theme';

import ButtonBase from '../../../../../components/button';

const onMinWidth = '@media (max-width: 1350px)';
const onMobileView = '@media (max-width: 900px)';

const Page = styled.article`
  line-height: 1.5;
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
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
    fill: ${theme.colour(Colour.BLUE, 'B16')};
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

  & > a > svg {
    width: 20px;
  }

  ${onMobileView} {
    flex-direction: column;
  }
`;

const Sort = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${theme.spacing('S10')};
  ${onMobileView} {
    margin-top: ${theme.spacing('S10')};
  }
`;

const SortLabel = styled.span`
  font-weight: ${theme.fontWeight('FW500')};
  padding-bottom: ${theme.spacing('S2')}; ;
`;

const SortButtonWrapper = styled.span`
  font-weight: ${theme.fontWeight('FW300')};
`;

const SortButton = styled(ButtonBase)`
  white-space: nowrap;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  & > .pagination {
    align-items: center;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;

    & > li > * {
      display: flex;
      padding: 0.5em 1em;
    }
    & > li.active > a {
      background-color: ${theme.colour(Colour.BLUE, 'B38')};
    }
  }
  ${onMobileView} {
    font-size: 0.7rem;
  }
`;

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
  SortButton,
  Pagination
};
