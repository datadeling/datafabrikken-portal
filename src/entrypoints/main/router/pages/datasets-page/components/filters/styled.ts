import styled, { css } from 'styled-components';

import { theme, Colour } from '../../../../../app/theme';

import ButtonBase from '../../../../../../../components/button';

type buttonProps = {
  $arrowUp?: boolean;
  $arrowDown?: boolean;
};

const onMobileView = '@media (max-width: 900px)';

const Title = styled.h3`
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: ${theme.spacing('S16')};
  border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, 'N0')};
  padding-bottom: ${theme.spacing('S8')};
  ${onMobileView} {
    display: none;
  }
`;

const FilterSection = styled.section`
  margin-bottom: ${theme.spacing('S20')};
  border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, 'N0')};
  padding-bottom: ${theme.spacing('S10')};
  &:last-of-type {
    border-bottom: 0;
  }
  ${onMobileView} {
    margin-top: ${theme.spacing('S10')};
  }
`;

const FilterTypeTitle = styled.h4`
  font-size: ${theme.fontSize('FS14')};
  margin-bottom: ${theme.spacing('S6')};
`;

const FilterGroup = styled.h5`
  font-size: ${theme.fontSize('FS12')};
  padding-top: ${theme.spacing('S10')};
  padding-bottom: ${theme.spacing('S6')};
`;

const CollapseButton = styled(ButtonBase)<buttonProps>`
  margin-top: ${theme.spacing('S2')};
  & > svg {
    width: 18px;
    ${({ $arrowDown }) =>
      $arrowDown &&
      css`
        transform: rotate(90deg);
      `}
    ${({ $arrowUp }) =>
      $arrowUp &&
      css`
        transform: rotate(-90deg);
      `}
  }

  &:hover {
    & > svg * {
      animation-play-state: running !important;
    }
  }
`;

export default {
  Title,
  FilterSection,
  FilterTypeTitle,
  FilterGroup,
  CollapseButton
};
