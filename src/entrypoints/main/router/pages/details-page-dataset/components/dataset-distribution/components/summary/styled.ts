import styled from 'styled-components';
import { theme } from '../../../../../../../app/theme';

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
`;

const Title = styled.h3`
  font-size: ${theme.fontSize('FS14')};
  flex: 1;
  margin: 0;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Formats = styled.div`
  display: flex;
  margin-left: 12px;
`;

export default {
  Summary,
  Title,
  Formats
};
