import styled, { css } from 'styled-components';
import { theme, Colour } from '../../../../entrypoints/main/app/theme';

interface Props {
  $boxStyle?: boolean;
}

const ContentSection = styled.section<Props>`
  margin-top: ${theme.spacing('S40')};
  font-size: ${theme.fontSize('FS12')};

  ${({ $boxStyle }) =>
    $boxStyle &&
    css`
      background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
      border-radius: 5px;
      padding: ${theme.spacing('S32')};
    `}
`;

const Title = styled.h2`
  flex-grow: 1;
  font-size: 32px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${theme.spacing('S10')};
`;

export default {
  ContentSection,
  Title,
  Header
};
