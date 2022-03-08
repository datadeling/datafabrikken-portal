import styled, { css } from 'styled-components';

import InfoBoxSC from '../info-box/styled';

const InfoBoxImage = styled.div<{ $hasHover?: boolean }>`
  ${({ $hasHover }) =>
    $hasHover &&
    css`
      & > img:nth-child(2) {
        display: none;
      }

      ${InfoBoxSC.InfoBox}:hover && {
        & > img:first-child {
          display: none;
        }
        & > img:nth-child(2) {
          display: inline;
        }
      }
    `}
`;

export default {
  InfoBoxImage
};
