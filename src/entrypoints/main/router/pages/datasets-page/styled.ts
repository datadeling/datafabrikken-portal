import styled, { css } from 'styled-components';

import ContainerSC from '../../../../../components/container/styled';
import DropdownMenuBase, {
  SC as DropdownMenuSC
} from '../../../../../components/dropdown-menu';
import ErrorSC from '../../../../../components/error-page/components/error-400/styled';

import DatasetIconBase from '../../../../../images/dataset.inline.svg';
import NewIconBase from '../../../../../images/dataset-new.inline.svg';

import { Colour, theme } from '../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Container = styled(ContainerSC.Container)`
  padding-top: ${theme.spacing('S50')};
  ${onMobileView} {
    padding-top: ${theme.spacing('S10')};
  }
`;

type rowProps = {
  reverse?: boolean;
};

const Row = styled.div<rowProps>`
  display: flex;
  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}
  ${onMobileView} {
    & {
      flex-direction: column;
    }
  }
`;

const Aside = styled.aside`
  flex: 0 0 20%;
  padding: 0 ${theme.spacing('S10')};
  ${onMobileView} {
    & {
      flex: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S6')};
  text-align: center;
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const SearchList = styled.section`
  padding: 0 ${theme.spacing('S10')};
`;

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: ${theme.spacing('S24')};
  padding: 0 ${theme.spacing('S10')};
`;

const DropdownFilters = styled(DropdownMenuBase)`
  display: none;
  margin-bottom: ${theme.spacing('S24')};
  padding: 0 ${theme.spacing('S10')};

  ${onMobileView} {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  & > ${DropdownMenuSC.DropdownMenu.Trigger} {
    display: flex;
  }
  & > ${DropdownMenuSC.DropdownMenu.Menu} {
    margin-top: ${theme.spacing('S10')};
    position: static;
  }
`;

const DropdownFilterButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${theme.colour(Colour.BLUE, 'B20')};
  border: none;
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${theme.spacing('S10')};
`;

const ExpandMoreIcon = styled.div`
  &:after {
    font-family: 'Material Icons';
    content: '\\e5cf';
    font-size: ${theme.fontSize('FS16')};
    margin-left: ${theme.spacing('S4')};
  }
`;

const ExpandLessIcon = styled.div`
  &:after {
    font-family: 'Material Icons';
    content: '\\e5ce';
    font-size: ${theme.fontSize('FS16')};
    margin-left: ${theme.spacing('S4')};
  }
`;

const Themes = styled.div`
  margin-bottom: ${theme.spacing('S20')};
  ${onMobileView} {
    display: none;
  }
`;

const Filters = styled.div`
  ${onMobileView} {
    display: none;
  }
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
      background-color: ${theme.colour(Colour.BLUE, 'B36')};
    }
  }
  ${onMobileView} {
    font-size: 0.7rem;
  }
`;

const NoHits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 80%;
  & > h3 {
    font-size: ${theme.fontSize('FS16')};
  }
  & > p {
    margin-top: ${theme.spacing('S4')};
  }
`;

const NoDatasetsFoundIcon = styled(ErrorSC.Error404Icon)``;

const ReportsRow = styled.div`
  display: flex;
  margin: ${theme.spacing('S20')} 0;
  & > * {
    margin: ${theme.spacing('S4')};
    flex-basis: 100%;

    &:first-child {
      margin-left: 0;
      ${onMobileView} {
        margin: ${theme.spacing('S4')};
      }
    }

    &:last-child {
      margin-right: 0;
      ${onMobileView} {
        margin: ${theme.spacing('S4')};
      }
    }
  }

  ${onMobileView} {
    flex-direction: column;
  }
`;

const DatasetIcon = styled(DatasetIconBase)`
  & > path,
  circle,
  rect {
    stroke-width: 0.65px;
  }
`;

const NewIcon = styled(NewIconBase)`
  & > path,
  circle,
  rect {
    stroke-width: 0.65px;
  }
`;

export default {
  Container,
  Row,
  Aside,
  Title,
  SearchList,
  SearchContainer,
  DropdownFilters,
  DropdownFilterButton,
  ExpandLessIcon,
  ExpandMoreIcon,
  Themes,
  Filters,
  Pagination,
  NoHits,
  NoDatasetsFoundIcon,
  ReportsRow,
  DatasetIcon,
  NewIcon
};
