import styled, { css } from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

type textContentProps = {
  lineHeight: number;
  truncate: boolean;
  visibleLines: number;
};

const TruncateContainer = styled.div`
  margin-bottom: 1em;
`;

const TextContent = styled.div<textContentProps>`
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: ${({ lineHeight }) => lineHeight || 20}px;

  ${({ truncate, lineHeight, visibleLines }) =>
    truncate &&
    css`
      -webkit-line-clamp: ${visibleLines};
      height: ${visibleLines * lineHeight}px;

      &:before {
        content: '';
        width: 100%;
        height: ${visibleLines * lineHeight}px;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(
          transparent ${lineHeight * 3}px,
          ${theme.colour(Colour.NEUTRAL, 'N0')}
        );
      }
    `}
`;

const ExpandButton = styled.button`
  border: none;
  border-bottom-style: dotted;
  border-bottom-color: ${theme.colour(Colour.NEUTRAL, 'N60')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  cursor: pointer;
`;
export default { TruncateContainer, TextContent, ExpandButton };
