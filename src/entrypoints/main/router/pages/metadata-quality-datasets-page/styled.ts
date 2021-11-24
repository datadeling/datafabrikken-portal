import styled from 'styled-components';
import { Colour, theme } from '../../../app/theme';
import ContainerSC from '../../../../../components/container/styled';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)``;

const Banner = styled.section`
  display: flex;
  background-color: ${theme.colour(Colour.BLUE, 'B54')};
  margin-bottom: ${theme.spacing('S32')};
`;

const Content = styled.section`
  background-color: ${theme.colour(Colour.NEUTRAL, 'N02')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  padding-top: ${theme.spacing('S32')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  font-weight: ${theme.fontWeight('FW400')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
    word-break: break-word;
  }
`;

const Subtitle = styled.h2`
  font-size: ${theme.fontSize('FS12')};
`;

const Section = styled.section``;

const MetadataCellContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    height: 30px;
    width: 30px;
    min-height: 30px;
    min-width: 30px;

    & path,
    circle {
      fill: transparent;
      stroke-width: 1px;
      stroke: ${theme.colour(Colour.BLUE, 'B52')};
    }
  }

  & > span {
    min-width: 40px;
    margin-left: ${theme.spacing('S8')};
    font-weight: ${theme.fontWeight('FW700')};
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0 2px;
  border-collapse: separate;
  table-layout: fixed;

  tr {
    text-align: left;
    background: ${theme.colour(Colour.NEUTRAL, 'N0')};

    & > td:first-of-type {
      padding-left: ${theme.spacing('S8')};
    }
    & > td:last-of-type {
      padding-right: ${theme.spacing('S8')};
    }
  }

  td,
  th {
    padding: ${theme.spacing('S8')} ${theme.spacing('S4')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;

    &:first-of-type {
      width: 21%;
    }

    &:nth-of-type(n + 2) {
      text-align: center;
    }
  }

  th {
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
    font-size: ${theme.fontSize('FS10')};
    font-weight: ${theme.fontWeight('FW500')};
    background: ${theme.colour(Colour.BLUE, 'B54')};

    & > div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    ${onMobileView} {
      width: 50% !important;
      &:nth-of-type(n + 3) {
        display: none;
      }
    }

    &:first-of-type {
      padding-left: ${theme.spacing('S8')};
    }
    &:last-of-type {
      padding-right: ${theme.spacing('S8')};
    }
  }

  tbody > tr {
    cursor: pointer;

    &:hover {
      background: ${theme.colour(Colour.BLUE, 'B20')};
    }
  }
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  margin: ${theme.spacing('S16')} 0px;

  appearance: none;
  background: none;
  border: none;
  border-bottom: 2px solid ${theme.colour(Colour.BLUE, 'B20')};
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid transparent;
  }

  & > svg {
    height: 20px;
    width: 20px;
    stroke: ${theme.colour(Colour.BLUE, 'B20')};
    & > path {
      fill: ${theme.colour(Colour.BLUE, 'B20')};
    }
  }

  & > span {
    margin-left: ${theme.spacing('S8')};
  }
`;

const RatingSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing('S32')};

  text-align: center;
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  font-weight: ${theme.fontWeight('FW700')};

  & > div {
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing('S12')};

    &:first-of-type {
      min-width: 21%;
      text-align: left;
    }

    ${onMobileView} {
      width: 50% !important;
      &:nth-of-type(n + 3) {
        display: none;
      }
    }

    &:first-of-type {
      padding-left: ${theme.spacing('S8')};
    }
    &:last-of-type {
      padding-right: ${theme.spacing('S8')};
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

export default {
  Container,
  Banner,
  Content,
  Title,
  Subtitle,
  Section,
  Table,
  TableHead,
  TableBody,
  MetadataCellContents,
  LoadMoreButton,
  RatingSummary,
  FrequentlyAskedQuestions,
  Question
};
