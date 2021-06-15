import styled from 'styled-components';

import { theme } from '../../../app/theme';

const Page = styled.article`
  line-height: 1.5;
  padding-top: ${theme.spacing('S50')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S10')};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default {
  Page,
  Title,
  Content
};
