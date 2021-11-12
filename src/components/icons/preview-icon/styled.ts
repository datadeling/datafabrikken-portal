import styled from 'styled-components';
import EyeIconBase from '../../../images/icon-eye.inline.svg';

const PreviewIcon = styled(EyeIconBase)`
  s & > g * {
    stroke: currentColor;
  }
`;

export default { PreviewIcon };
