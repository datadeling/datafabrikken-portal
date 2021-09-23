import styled from 'styled-components';

import { theme, Colour } from '../../../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Category = styled.div`
  display: flex;
  font-size: ${theme.fontSize('FS10')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  padding: ${theme.spacing('S16')};
  margin-bottom: ${theme.spacing('S10')};
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
`;

const CategoryIcon = styled.div`
  display: flex;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: ${theme.spacing('S12')};
`;

const Title = styled.div`
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

const Ingress = styled.div`
  margin-top: ${theme.spacing('S10')};
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 50px;
  max-width: 50px;
  margin-left: ${theme.spacing('S32')};

  ${onMobileView} {
    display: none;
  }
`;

const Count = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;

  & > svg {
    margin-right: ${theme.spacing('S4')};
  }
`;

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${theme.spacing('S32')};

  ${onMobileView} {
    display: none;
  }
`;

const Post = styled.div`
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

export default {
  Category,
  CategoryIcon,
  TitleContainer,
  Title,
  Ingress,
  CountContainer,
  Count,
  UserInfo,
  PostContainer,
  Post,
  PostDate
};
