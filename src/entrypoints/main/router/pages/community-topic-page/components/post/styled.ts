import styled from 'styled-components';

import { theme, Colour } from '../../../../../app/theme';

const Post = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize('FS10')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  padding: ${theme.spacing('S24')};
  background: ${theme.colour(Colour.NEUTRAL, 'N02')};
  margin-bottom: ${theme.spacing('S10')};
  &:first-child {
    padding-top: 0;
    background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }
`;

const UserInfo = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing('S10')};
`;

const Content = styled.div`
  padding-top: ${theme.spacing('S20')};
`;

export default {
  Post,
  UserInfo,
  Content
};
