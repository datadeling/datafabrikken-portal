import styled from 'styled-components';

import { SC as ExpansionPanelSC } from '@fellesdatakatalog/expansion-panel';

import AuthoritativeSVG from '../../../../../images/authoritative.inline.svg';
import CheckSVG from '../../../../../images/icon-checked-sm.inline.svg';
import CrossSVG from '../../../../../images/icon-empty-search-sm.inline.svg';
import { Colour, theme } from '../../../app/theme';

import ContainerSC from '../../../../../components/container/styled';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)``;

const Banner = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colour(Colour.BLUE, 'B54')};
  margin-bottom: ${theme.spacing('S32')};
`;

const Content = styled.section`
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  padding-top: ${theme.spacing('S32')};
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize('FS32')};
  font-weight: ${theme.fontWeight('FW400')};
  margin-bottom: ${theme.spacing('S2')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSize('FS12')};
  ${onMobileView} {
    & > * {
      margin-top: ${theme.spacing('S2')};
    }
  }
`;

const BannerRating = styled.div`
  display: flex;
  font-size: ${theme.fontSize('FS20')};
  align-items: center;

  & > svg {
    height: 40px;
    width: 40px;

    & > path,
    circle {
      fill: transparent;
      stroke: ${theme.colour(Colour.NEUTRAL, 'N0')};
      stroke-width: 1px;
    }
  }

  & > p {
    margin-left: 7px;
    margin-right: 20px;
  }
`;

const AuthoritativeIcon = styled(AuthoritativeSVG)`
  height: 24px;
  width: 24px;
  min-height: 24px;
  min-width: 24px;
  margin-left: ${theme.spacing('S12')};
  margin-top: -3px;

  & path {
    fill: ${theme.colour(Colour.BLUE, 'B52')};
  }
`;

const Section = styled.section`
  margin-top: ${theme.spacing('S40')};
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0 2px;
  border-collapse: separate;
  table-layout: fixed;

  tr {
    text-align: left;
    background: ${theme.colour(Colour.NEUTRAL, 'N0')};
    padding: ${theme.spacing('S10')} 0;
  }

  td,
  th {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  th {
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing('S12')};

    & > div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
    font-weight: ${theme.fontWeight('FW700')};

    background: ${theme.colour(Colour.BLUE, 'B54')};
  }

  tbody {
    & > tr {
      color: ${theme.colour(Colour.BLUE, 'B52')};

      &.section-row > td > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theme.spacing('S12')};
        font-weight: ${theme.fontWeight('FW700')};

        & > div {
          display: flex;
          align-items: center;
          margin-right: 26px;

          & > svg {
            height: 30px;
            width: 30px;
            min-height: 30px;
            min-width: 30px;
            margin: 0;
            margin-right: ${theme.spacing('S8')};
          }

          & > span {
            min-width: 40px;
          }
        }
      }
    }

    &
      ${ExpansionPanelSC.ExpansionPanel.Head},
      ${ExpansionPanelSC.ExpansionPanel.Body} {
      padding: ${theme.spacing('S12')} ${theme.spacing('S16')};
      padding-left: ${theme.spacing('S32')};
      cursor: pointer;
    }

    & ${ExpansionPanelSC.ExpansionPanel.HeadContent} {
      display: flex;

      & svg {
        height: 24px;
        width: 24px;
        min-height: 24px;
        min-width: 24px;
        margin: 0;
        margin-right: ${theme.spacing('S12')};
      }
    }

    & ${ExpansionPanelSC.ExpansionPanel.HeadExpansionIndicator} {
      & > svg > path {
        fill: ${theme.colour(Colour.BLUE, 'B52')};
      }
    }

    & ${ExpansionPanelSC.ExpansionPanel.Body} {
      & span {
        display: flex;
        margin-top: ${theme.spacing('S8')};
      }
    }
  }
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const CheckIcon = styled(CheckSVG)`
  & > path {
    fill: ${theme.colour(Colour.BLUE, 'B16')};
  }
`;

const CrossIcon = styled(CrossSVG)`
  & > path {
    fill: ${theme.colour(Colour.BLUE, 'B52')};
  }
`;

const DimensionContainer = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    margin-left: 7px;
    margin-right: 7px;
    max-width: 250px;
    white-space: normal;
    &:hover > svg > path {
      fill: black;
    }
  }
`;

const FrequentlyAskedQuestions = styled.div`
  margin-bottom: ${theme.spacing('S32')};
  font-size: ${theme.fontSize('FS12')};
`;

const Question = styled.div`
  &:nth-of-type(n + 2) {
    margin-left: ${theme.spacing('S8')};
  }

  & > h3 {
    font-size: ${theme.fontSize('FS16')};
  }

  & > p {
    margin-top: ${theme.spacing('S8')};
  }

  & > a {
    margin-top: ${theme.spacing('S8')};
  }
`;

const QualityIconContainer = styled.div`
  & > svg > path,
  circle {
    fill: transparent;
    stroke: ${theme.colour(Colour.BLUE, 'B52')};
    stroke-width: 1px;
  }
`;

export default {
  Container,
  Content,
  Banner,
  Title,
  SubTitle,
  BannerRating,
  AuthoritativeIcon,
  Section,
  Table,
  TableHead,
  TableBody,
  CheckIcon,
  CrossIcon,
  FrequentlyAskedQuestions,
  Question,
  DimensionContainer,
  QualityIconContainer
};
