import styled, { css } from 'styled-components';

import { Variant } from './enums';

interface Props {
  variant?: Variant;
}

const onMobileView = '@media (max-width: 900px)';

const ContentBoxHeader = styled.h2`
  font-size: 2.8rem;
  line-height: 1.3;
  word-break: break-word;
  ${onMobileView} {
    font-size: 1.8rem;
  }
`;

const Title = styled.span<Props>`
  ${({ variant }) => {
    switch (variant) {
      case Variant.SECONDARY:
        return css`
          color: ${({ theme }) => theme.colour.blue.B70};
        `;
      default:
        return css`
          color: ${({ theme }) => theme.colour.neutral.N10};
        `;
    }
  }}
`;

export default { ContentBoxHeader, Title };
