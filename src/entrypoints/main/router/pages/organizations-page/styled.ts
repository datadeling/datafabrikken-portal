import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Entity } from '../../../../../types/enums';
import { Colour, theme } from '../../../app/theme';
import ContainerSC from '../../../../../components/container/styled';

import CaretUpBase from '../../../../../images/icon-caret-up-sm.inline.svg';
import CaretDownBase from '../../../../../images/icon-caret-down-sm.inline.svg';
import CaretBothBase from '../../../../../images/icon-caret-both-sm.inline.svg';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)`
  padding-top: ${theme.spacing('S4')};
  ${onMobileView} {
    padding-top: ${theme.spacing('S2')};
  }
`;

const Content = styled.div`
  padding: ${theme.spacing('S32')} 0px;
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
`;

const Header = styled.h1`
  margin-bottom: ${theme.spacing('S10')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};

  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
    word-break: break-word;
  }
`;

const SearchBarContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: ${theme.spacing('S32')};

  ${onMobileView} {
    width: 100%;
  }
`;

const SearchHit = styled(Link)`
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  color: ${theme.colour(Colour.BLUE, 'B52')} !important;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing('S2')};
  padding: ${theme.spacing('S8')} ${theme.spacing('S10')};
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${theme.colour(Colour.BLUE, 'B16')};
    color: ${theme.colour(Colour.NEUTRAL, 'N0')} !important;
  }
`;

const SortLabel = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${theme.fontSize('FS12')};
  font-weight: ${theme.fontWeight('FW500')};
  width: ${theme.spacing('S16')};
  min-width: ${theme.spacing('S16')};
  height: ${theme.spacing('S16')};
`;

const Labels = styled.span`
  display: flex;
  align-items: center;
  flex: 0 0 50%;
  ${onMobileView} {
    flex: 0 0 80%;
  }
`;

const Counts = styled.div`
  display: flex;
  flex: 0 0 50%;
  justify-content: flex-end;

  ${onMobileView} {
    flex: 0 0 20%;
  }
`;

const CountTag = styled.div<{ type?: Entity }>`
  text-align: center;
  border: none;
  padding: ${theme.spacing('S4')} ${theme.spacing('S8')};
`;

const SortRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${theme.spacing('S8')} ${theme.spacing('S10')};
  background-color: ${theme.colour(Colour.BLUE, 'B54')};
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  font-size: ${theme.fontSize('FS10')};
  font-weight: ${theme.fontWeight('FW500')};
  text-decoration: none;

  ${onMobileView} {
    padding: ${theme.spacing('S4')} ${theme.spacing('S10')};
    & > ${Labels} {
      flex: 0 0 65%;
    }
    & > ${Counts} {
      flex: 0 0 35%;
    }
  }
`;

const CaretUp = styled(CaretUpBase)`
  width: 20px;
  height: 20px;
  margin: 0px ${theme.spacing('S8')};
`;

const CaretDown = styled(CaretDownBase)`
  width: 20px;
  height: 20px;
  margin: 0px ${theme.spacing('S8')};
`;

const CaretBoth = styled(CaretBothBase)`
  width: 20px;
  height: 20px;
  margin: 0px ${theme.spacing('S8')};
`;

const SortButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: end;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover > svg > path {
    fill: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }

  ${onMobileView} {
    font-size: ${theme.fontSize('FS8')};
  }
`;

const TitleSortButton = styled(SortButton)``;

const SpinnerContainer = styled.div`
  background-color: ${theme.colour(Colour.BLUE, 'B02')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default {
  Container,
  Content,
  Header,
  Title,
  SearchBarContainer,
  SearchHit,
  SortLabel,
  Labels,
  Counts,
  CountTag,
  SortRow,
  SortButton,
  TitleSortButton,
  CaretUp,
  CaretDown,
  CaretBoth,
  SpinnerContainer
};
