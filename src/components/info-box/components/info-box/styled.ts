import styled from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

import InfoBoxTitleSC from '../info-box-title/styled';

const onMobileView = '@media (max-width: 900px)';

type infoBoxProps = {
  $invertColor?: boolean;
};
const InfoBox = styled.a<infoBoxProps>`
  background-color: ${({ $invertColor }) =>
    $invertColor
      ? theme.colour(Colour.NEUTRAL, 'N0')
      : theme.colour(Colour.BLUE, 'B48')};
  color: ${({ $invertColor }) =>
    $invertColor
      ? theme.colour(Colour.BLUE, 'B52')
      : theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0 12px 48px
    ${({ $invertColor }) =>
      $invertColor
        ? theme.colour(Colour.BLUE, 'B38', 15)
        : theme.colour(Colour.NEUTRAL, 'N60')};
  display: flex;
  flex-direction: column;
  flex: 0 1 49%;
  line-height: 1.15;
  margin-bottom: ${theme.spacing('S20')};

  &:hover {
    ${InfoBoxTitleSC.Title} {
      & > svg * {
        animation-play-state: running !important;
      }
    }
  }
  ${onMobileView} {
    flex-basis: 100%;
  }
`;

const InfoBoxHeader = styled.div`
  display: flex;
`;

const InfoBoxRow = styled.div`
  display: flex;
  padding: ${theme.spacing('S24')};

  ${onMobileView} {
    flex-direction: column;
    padding: ${theme.spacing('S10')};
  }
`;

const IconWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 20%;

  & > svg {
    flex-basis: 90%;
    ${onMobileView} {
      flex-basis: 40%;
    }
  }

  ${onMobileView} {
    margin-bottom: ${theme.spacing('S10')};
  }
`;

const ImageWrapper = styled.div`
  min-height: 250px;
  max-height: 250px;
  overflow: hidden;

  & img {
    max-width: calc(100%);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Date = styled.span`
  color: ${theme.colour(Colour.BLUE, 'B16')};
  font-size: ${theme.fontSize('FS10')};
  margin-bottom: ${theme.spacing('S6')};
`;

export default {
  InfoBox,
  InfoBoxHeader,
  InfoBoxRow,
  IconWrapper,
  ImageWrapper,
  ContentWrapper,
  Date
};
