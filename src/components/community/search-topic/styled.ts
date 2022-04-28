import styled from 'styled-components';
import { Colour, theme } from '../../../entrypoints/main/app/theme';

import TruncatedTextSC from '../../truncated-text/styled';

const onMobileView = '@media (max-width: 900px)';

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & > div {
    margin-top: ${theme.spacing('S10')};
  }

  ${onMobileView} {
    flex: 1 1 100%;
  }
`;

const Title = styled.h3`
  font-size: ${theme.fontSize('FS14')};
  & > svg {
    width: 25px;
    vertical-align: text-bottom;
  }
  ${onMobileView} {
    font-size: ${theme.fontSize('FS10')};
  }
`;

const SearchPost = styled.a`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 30px;
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing('S10')} ${theme.spacing('S20')};
  margin-top: ${theme.spacing('S10')};
  margin-bottom: ${theme.spacing('S10')};
  overflow: hidden;

  & > ${Info} > ${Title} {
    color: ${theme.colour(Colour.BLUE, 'B38')};
  }

  &:hover {
    cursor: pointer;
    background-color: ${theme.colour(Colour.BLUE, 'B16')};
    color: ${theme.colour(Colour.BLUE, 'B52')};
    & > ${Info} > ${Title} {
      text-decoration: none;
      color: ${theme.colour(Colour.BLUE, 'B52')};
      & > svg {
        animation-play-state: running !important;
      }
    }

    & svg {
      color: ${theme.colour(Colour.BLUE, 'B52')};
    }

    & ${TruncatedTextSC.TextContent} {
      &:before {
        background: none;
      }
    }
  }

  ${onMobileView} {
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.spacing('S10')} ${theme.spacing('S10')};

    & > div:first-child {
      padding-bottom: ${theme.spacing('S4')};
    }
  }
`;

const SubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: ${theme.fontSize('FS10')};
  ${onMobileView} {
    & > * {
      margin-top: ${theme.spacing('S6')};
    }
  } ;
`;

const UserTime = styled.div`
  display: flex;
  align-items: center;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${theme.spacing('S4')};
  & > a {
    margin-right: ${theme.spacing('S4')};
  }
`;

const Category = styled.div`
  align-items: center;
  display: flex;
  margin-left: ${theme.spacing('S6')};

  & > svg {
    margin-right: ${theme.spacing('S2')};
    transform: scale(0.8);

    & > path {
      stroke: ${theme.colour(Colour.NEUTRAL, 'N70')};
    }
  }
`;

const Statistics = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
  justify-content: space-between;
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};

  & > li {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    & > span {
      height: 30px;
      display: inline-flex;
      align-items: center;
    }
  }

  ${onMobileView} {
    & > li {
      flex: 0 0 50%;
      & > svg {
        transform: scale(0.8);
      }
    }
  }
`;

export default {
  SearchPost,
  Info,
  Title,
  SubTitle,
  UserTime,
  Tags,
  Category,
  Statistics
};
