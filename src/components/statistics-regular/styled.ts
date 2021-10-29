import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme, Colour } from '../../entrypoints/main/app/theme';

const StatisticsContainer = styled.div<{ onClick: any }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background-color: ${theme.colour(Colour.BLUE, 'B52')};
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  padding: ${theme.spacing('S8')};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${theme.colour(Colour.BLUE, 'B48')};
      }
    `}
`;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-grow: 1;

  cursor: pointer;
  &:hover {
    & > ${StatisticsContainer} {
      background-color: ${theme.colour(Colour.BLUE, 'B48')};
    }
  }
`;

const IconWithCount = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${theme.spacing('S4')};
  font-size: ${theme.fontSize('FS16')};
  font-weight: ${theme.fontWeight('FW400')};
  & > svg {
    height: 35px;
    width: 35px;
    margin-right: ${theme.spacing('S4')};

    & > path,
    circle,
    rect {
      stroke: ${theme.colour(Colour.BLUE, 'B20')};
      fill: transparent;
    }
  }
`;

export default { StatisticsContainer, LinkWrapper, IconWithCount };
