import styled, { css } from 'styled-components';

import ContainerSC from '../../../../../components/container/styled';

import { Colour, theme } from '../../../app/theme';

import ThemeBoxSC from '../../../../../components/theme-box/styled';

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

const AsideTitle = styled.div`
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: ${theme.spacing('S16')};
`;

const AsideSubTitle = styled.div`
  margin-bottom: ${theme.spacing('S6')};
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

const Themes = styled.div`
  margin-bottom: ${theme.spacing('S20')};
`;

const ThemesRow = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing('S6')};
  padding: 0 ${theme.spacing('S10')};
  ${ThemeBoxSC.ThemeBox}:first-child {
    margin-left: 0;
  }
  ${ThemeBoxSC.ThemeBox} {
    margin-left: ${theme.spacing('S6')};
  }
  ${onMobileView} {
    flex-direction: column;
    margin-bottom: 0;
    ${ThemeBoxSC.ThemeBox} {
      margin-left: 0;
      margin-bottom: ${theme.spacing('S6')};
    }
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

export default {
  Container,
  Row,
  Aside,
  Title,
  AsideTitle,
  AsideSubTitle,
  SearchList,
  SearchContainer,
  Themes,
  ThemesRow,
  Pagination
};
