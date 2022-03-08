import styled, { css } from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

import { Variant } from './enums';

interface Props {
  variant?: Variant;
}

const onMobileView = '@media (max-width: 900px)';

const ContentBoxHeader = styled.h2`
  font-size: ${theme.fontSize('FS28')};
  margin-bottom: ${theme.spacing('S2')};
  word-break: break-word;
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const Title = styled.span<Props>`
  ${({ variant }) => {
    switch (variant) {
      case Variant.SECONDARY:
        return css`
          color: ${theme.colour(Colour.BLUE, 'B52')};
        `;
      default:
        return css`
          color: ${theme.colour(Colour.NEUTRAL, 'N0')};
        `;
    }
  }}
`;

export default { ContentBoxHeader, Title };
