import styled from 'styled-components';
import { theme } from '../../../../../entrypoints/main/app/theme';

import Buttons from '../buttons/styled';

const LogOutContainer = styled.span`
  display: flex;
  white-space: pre;
  align-items: center;
  & > ${Buttons.UnderlineButton} {
    margin-left: ${theme.spacing('S4')};
  }
`;

export default {
  LogOutContainer
};
