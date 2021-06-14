import styled from 'styled-components';

import { theme } from '../../../../../app/theme';

const Title = styled.div`
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: ${theme.spacing('S16')};
`;

const FilterSection = styled.section`
  margin-bottom: ${theme.spacing('S20')};
`;

const FilterTypeTitle = styled.div`
  margin-bottom: ${theme.spacing('S6')};
`;

export default { Title, FilterSection, FilterTypeTitle };
