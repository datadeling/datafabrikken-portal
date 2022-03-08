import styled from 'styled-components';

import { theme } from '../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Page = styled.article`
  line-height: 1.5;
  padding-top: ${theme.spacing('S50')};
  ${onMobileView} {
    padding-top: ${theme.spacing('S10')};
  }
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S10')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > a {
    flex: 0 1 32%;
  }
`;

export default {
  Page,
  Title,
  Content
};
