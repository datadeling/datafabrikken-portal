import styled from 'styled-components';

import { theme, Colour } from '../../../app/theme';

const Page = styled.article`
  line-height: 1.5;
  padding-top: ${theme.spacing('S50')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S10')};
`;

const Info = styled.p`
  margin-bottom: ${theme.spacing('S24')};
`;

const Posts = styled.div`
  padding: ${theme.spacing('S40')};
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
`;

const Header = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing('S12')};
`;

const Tags = styled.div`
  display: inline-flex;
  margin-right: ${theme.spacing('S24')};
  gap: ${theme.spacing('S4')};

  & > a > span {
    background-color: ${theme.colour(Colour.BLUE, 'B44')};
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }
`;

const Statistics = styled.ul`
  display: flex;
  list-style-type: none;

  & > li {
    margin-right: ${theme.spacing('S10')};
    display: inline-flex;
    align-items: center;
  }

  & > li > svg {
    margin-right: ${theme.spacing('S4')};
    & > path {
      stroke: #ffffff;
    }
  }
`;

const LinkWrapper = styled.div`
  flex-grow: 1;
  text-align: right;
`;

export default {
  Page,
  Title,
  Info,
  Posts,
  Header,
  Tags,
  Statistics,
  LinkWrapper
};
