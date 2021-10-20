import styled, { css } from 'styled-components';

import { theme, Colour } from '../../../../../app/theme';

import ButtonBase from '../../../../../../../components/button';
import CloseIconBase from '../../../../../../../images/close.inline.svg';

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

const FilterPillContainer = styled(FilterSection)`
  display: flex;
  flex-wrap: wrap;
`;

const FilterPill = styled.button`
  display: flex;
  align-items: center;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  border: 1px solid ${theme.colour(Colour.BLUE, 'B44')};
  background-color: ${theme.colour(Colour.BLUE, 'B44')};
  margin: ${theme.spacing('S2')};
  padding: ${theme.spacing('S2')} ${theme.spacing('S4')};
  border-radius: ${theme.spacing('S12')};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colour(Colour.BLUE, 'B52')};
    border: 1px solid ${theme.colour(Colour.NEUTRAL, 'N0')};
  }
`;

const InversePill = styled(FilterPill)`
  color: ${theme.colour(Colour.BLUE, 'B52')};
  border: 1px solid ${theme.colour(Colour.NEUTRAL, 'N0')};
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  border-radius: ${theme.spacing('S12')};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colour(Colour.NEUTRAL, 'N20')};
    border: 1px solid ${theme.colour(Colour.NEUTRAL, 'N20')};
  }
`;

const CloseIcon = styled(CloseIconBase)`
  width: 15px;
  height: 15px;
  stroke: white;
`;

export default {
  Title,
  FilterSection,
  FilterTypeTitle,
  FilterGroup,
  CollapseButton,
  FilterPillContainer,
  FilterPill,
  InversePill,
  CloseIcon
};
