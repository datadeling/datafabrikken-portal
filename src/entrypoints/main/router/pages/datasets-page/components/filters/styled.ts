import styled from 'styled-components';

import { theme } from '../../../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Title = styled.div`
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: ${theme.spacing('S16')};
  ${onMobileView} {
    display: none;
  }
`;

const FilterSection = styled.section`
  margin-bottom: ${theme.spacing('S20')};
  ${onMobileView} {
    margin-top: ${theme.spacing('S10')};
  }
`;

const FilterTypeTitle = styled.div`
  margin-bottom: ${theme.spacing('S6')};
`;

export default { Title, FilterSection, FilterTypeTitle };
