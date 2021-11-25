import styled, { css } from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const SuggestionsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 999;
  top: ${theme.spacing('S40')};
  left: 0px;
  right: 0px;
  width: 100%;
  overflow: hidden;

  border-radius: 0px 0px 5px 5px;
  border: 1px solid ${theme.colour(Colour.BLUE, 'B52')};
  border-top: 0;
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};

  ${onMobileView} {
    top: ${theme.spacing('S32')};
  }
`;

const highlightStyle = css`
  background-color: ${theme.colour(Colour.NEUTRAL, 'N15')};
`;

const Suggestion = styled.li<{ $highlighted: boolean }>`
  color: ${theme.colour(Colour.BLUE, 'B52')};
  font-size: ${theme.fontSize('FS14')};
  padding: ${theme.spacing('S4')} ${theme.spacing('S10')};
  cursor: pointer;

  &:hover,
  :focus {
    ${highlightStyle}
  }

  ${({ $highlighted }) => ($highlighted ? highlightStyle : null)}

  ${onMobileView} {
    font-size: ${theme.fontSize('FS12')};
  }
`;

const SuggestionDivider = styled.hr`
  width: 90%;
  align-self: center;
  padding: 0px;
  margin: 0px;
  height: 1px;
  margin-top: ${theme.spacing('S8')};
  height: 1px;
  border: none;
  background-color: ${theme.colour(Colour.NEUTRAL, 'N70')};
`;

const AutosuggestContainer = styled.div`
  position: relative;
  flex: 0 1 60%;

  ${onMobileView} {
    flex-basis: 100%;
  }

  &:not(:focus-within) {
    border-radius: 5px;

    & > ${SuggestionsContainer} {
      visibility: hidden;
    }
  }
`;

export default {
  Suggestion,
  SuggestionDivider,
  SuggestionsContainer,
  AutosuggestContainer
};
