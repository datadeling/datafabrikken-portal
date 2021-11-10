import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const RadioButton = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: ${theme.spacing('S4')};
  cursor: pointer;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioIcon = styled.svg`
  fill: ${theme.colour(Colour.NEUTRAL, 'N0')};
  stroke: ${theme.colour(Colour.NEUTRAL, 'N0')};
  stroke-width: 2px;
`;

type iconProps = {
  $checked: boolean;
};

const IconContainer = styled.div<iconProps>`
  border: 1px solid;
  border-radius: 50%;
  margin-right: ${theme.spacing('S4')};
  min-width: 25px;
  width: 25px;
  height: 25px;
  transition: all 150ms;
  ${RadioContainer}> input:focus + & {
    box-shadow: 0 0 0 3px ${theme.colour(Colour.BLUE, 'B36')};
  }
  ${RadioIcon} {
    visibility: ${({ $checked }) => ($checked ? 'visible' : 'hidden')};
  }
`;

export default { RadioContainer, RadioButton, Label, IconContainer, RadioIcon };
