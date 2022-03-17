import styled from 'styled-components';

import { theme, Colour } from '../../../app/theme';

import { SC as InfoBoxSC } from '../../../../../components/info-box';

const onMinWidth = '@media (max-width: 1350px)';
const onMobileView = '@media (max-width: 900px)';

const Page = styled.article`
  line-height: 1.5;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const SubTitle = styled.h3`
  font-size: ${theme.fontSize('FS18')};
  margin-bottom: ${theme.spacing('S2')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS16')};
  }
`;

const Ingress = styled.div`
  font-size: ${theme.fontSize('FS16')};
  line-height: 1.5;
  ${onMobileView} {
    font-size: ${theme.fontSize('FS12')};
  }

  & * > a {
    align-items: center;
    align-self: flex-start;
    cursor: pointer;
    display: inline-flex;
    font-weight: ${theme.fontWeight('FW400')};

    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex: 0 0 10%;
  margin-left: ${theme.spacing('S64')};
  ${onMinWidth} {
    display: none;
  }
  & > svg {
    flex-basis: 100%;
    transform: scaleX(-1);
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing('S10')};

  & > a {
    margin-bottom: 0;
  }

  & > ${InfoBoxSC.InfoBox.InfoBox} {
    & > ${InfoBoxSC.InfoBox.InfoBoxRow} {
      & ${InfoBoxSC.InfoBoxTitle.Title} {
        margin-bottom: ${theme.spacing('S2')};
      }
    }
  }
`;

export default {
  Page,
  Header,
  TitleContainer,
  Title,
  SubTitle,
  IconWrapper,
  Ingress,
  Content,
  Categories
};
