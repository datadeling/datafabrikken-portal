import styled from 'styled-components';
import { theme, Colour } from '../../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const Topic = styled.a`
  display: flex;
  flex-direction: row;
  color: ${theme.colour(Colour.BLUE, 'B38')};
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing('S10')} ${theme.spacing('S16')};
  margin-top: ${theme.spacing('S10')};

  &:hover {
    cursor: pointer;
    background-color: ${theme.colour(Colour.BLUE, 'B16')};
    color: ${theme.colour(Colour.BLUE, 'B52')};
    & a {
      text-decoration: none;
      color: ${theme.colour(Colour.BLUE, 'B52')};
    }

    & svg {
      color: ${theme.colour(Colour.BLUE, 'B52')};
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

const Info = styled.div`
  display: flex;
  flex: 0 0 70%;
  flex-direction: column;

  & > div {
    padding-top: 10px;

    & > * {
      margin-right: 5px;
    }
  }

  ${onMobileView} {
    flex: 1 1 100%;
  }
`;

const Title = styled.h3`
  font-size: ${theme.fontSize('FS14')};
  & > svg {
    width: 25px;
    vertical-align: middle;
  }
  ${onMobileView} {
    font-size: ${theme.fontSize('FS10')};
  }
`;

const SubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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

const Statistics = styled.ul`
  display: flex;
  list-style-type: none;
  flex: 0 0 20%;
  justify-content: space-between;
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};

  & > li {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export default { Topic, Info, Title, SubTitle, UserTime, Tags, Statistics };
