import styled from 'styled-components';

import { theme, Colour } from '../../../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Topic = styled.div`
  display: flex;
  gap: ${theme.spacing('S32')};
  font-size: ${theme.fontSize('FS10')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  padding: ${theme.spacing('S16')} ${theme.spacing('S20')}
    ${theme.spacing('S16')} ${theme.spacing('S20')};
  margin-bottom: ${theme.spacing('S10')};
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.div`
  margin-bottom: ${theme.spacing('S12')};
  & > a {
    display: inline;
    font-size: ${theme.fontSize('FS12')};
    color: ${theme.colour(Colour.BLUE, 'B52')};
  }
  & > a > svg {
    width: 20px;
    position: relative;
    top: 5px;
  }
`;

const Statistics = styled.ul`
  display: flex;
  list-style-type: none;

  & > li {
    min-width: 80px;
    max-width: 80px;
    display: inline-flex;
    align-items: center;
  }

  & > li > svg {
    margin-right: ${theme.spacing('S4')};
  }

  ${onMobileView} {
    display: none;
  }
`;

const PostContainer = styled.div`
  display: flex;
  align-items: center;

  ${onMobileView} {
    display: none;
  }
`;

const Teaser = styled.div`
  min-width: 300px;
  max-width: 300px;

  & > a {
    display: inline;
    font-weight: ${theme.fontWeight('FW300')};
    color: ${theme.colour(Colour.BLUE, 'B52')};
  }

  & > a > svg {
    width: 20px;
    position: relative;
    top: 5px;
  }
`;

const UserInfo = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing('S10')};
`;

const PostDate = styled.span`
  white-space: nowrap;
`;

const Tags = styled.div`
  display: inline-flex;
  gap: ${theme.spacing('S4')};
`;

export default {
  Topic,
  TitleContainer,
  Title,
  Statistics,
  UserInfo,
  PostContainer,
  Teaser,
  PostDate,
  Tags
};
