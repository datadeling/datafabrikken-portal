import styled from 'styled-components';
import { theme, Colour } from '../../../entrypoints/main/app/theme';

const Topic = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 0px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    padding-top: 10px;

    & > * {
      margin-right: 5px;
    }
  }
`;

const TopicTitle = styled.a`
  font-weight: ${theme.fontWeight('FW700')};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const Statistics = styled.ul`
  display: flex;
  list-style-type: none;

  & > li {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 5px;
  }

  @media (max-width: 990px) {
    display: none;
  } ;
`;

const BigNumber = styled.span`
  font-weight: ${theme.fontWeight('FW700')};
  font-size: ${theme.fontSize('FS16')};
`;

export default { Topic, Info, TopicTitle, Statistics, BigNumber };
