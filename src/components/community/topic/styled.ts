import styled from 'styled-components';
import { theme, Colour } from '../../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const Topic = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing('S10')} ${theme.spacing('S16')};
  margin: 10px 0px;
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
  flex: 0 0 30%;
  list-style-type: none;

  & > li {
    display: inline-flex;
    flex: 0 0 33%;
    align-items: center;
    & > svg {
      margin-right: ${theme.spacing('S4')};
    }
  }

  ${onMobileView} {
    display: none;
  } ;
`;

export default { Topic, Info, Title, SubTitle, UserTime, Tags, Statistics };
