import styled from 'styled-components';

import { theme } from '../../../../entrypoints/main/app/theme';

const Title = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: ${theme.spacing('S8')};

  & > svg {
    flex: 0 0 30px;
  }
`;

export default { Title };
