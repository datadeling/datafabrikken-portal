import styled from 'styled-components';

import { theme } from '../../../../../app/theme';

import ThemeBoxSC from '../../../../../../../components/theme-box/styled';

const onMobileView = '@media (max-width: 900px)';

const ThemesRow = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing('S6')};
  padding: 0 ${theme.spacing('S10')};
  ${ThemeBoxSC.ThemeBox}:first-child {
    margin-left: 0;
  }
  ${ThemeBoxSC.ThemeBox} {
    margin-left: ${theme.spacing('S6')};
  }
  ${onMobileView} {
    flex-direction: column;
    margin-bottom: 0;
    padding: 0;
    ${ThemeBoxSC.ThemeBox} {
      margin-left: 0;
      margin-bottom: ${theme.spacing('S6')};
    }
  }
`;

export default {
  ThemesRow
};
