import styled from 'styled-components';
import { theme, Colour } from '../../../entrypoints/main/app/theme';

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

  @media (max-width: 990px) {
    display: none;
  } ;
`;

export default { Topic, Info, Statistics };
