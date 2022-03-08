import styled, { css } from 'styled-components';

import { theme } from '../../entrypoints/main/app/theme';

import { Variant } from './enums';

const onMobileView = '@media (max-width: 900px)';

type ContainerProps = {
  $variant?: Variant;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${({ $variant }) => ($variant ? `${$variant}px` : '1200px')};
  z-index: 10;

  ${({ $variant }) =>
    $variant === Variant.WIDTH_720
      ? css`
          @media (max-width: 721px) {
            & {
              width: 100%;
              padding: 0 ${theme.spacing('S32')};
            }
          }
        `
      : css`
          @media (max-width: 1251px) {
            & {
              width: 100%;
              padding: 0 ${theme.spacing('S32')};
            }
          }
        `}

  ${onMobileView} {
    & {
      padding: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

export default { Container };
