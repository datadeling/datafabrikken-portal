import styled from 'styled-components';

import { theme, Colour } from '../../../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Post = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize('FS10')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  padding: ${theme.spacing('S24')};
  background: ${theme.colour(Colour.NEUTRAL, 'N02')};
  margin-bottom: ${theme.spacing('S10')};

  & * > img {
    max-width: 100%;
    height: auto;
  }

  &:first-child {
    padding-top: 0;
    background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }

  ${onMobileView} {
    padding: ${theme.spacing('S10')};
  }
`;

const UserInfo = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing('S10')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS8')};
  }
`;

const Content = styled.div`
  padding-top: ${theme.spacing('S20')};

  & > p {
    margin-bottom: ${theme.spacing('S10')};
  }
`;

export default {
  Post,
  UserInfo,
  Content
};
