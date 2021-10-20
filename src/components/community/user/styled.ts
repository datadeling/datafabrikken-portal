import styled from 'styled-components';
import { theme, Colour } from '../../../entrypoints/main/app/theme';

const User = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: ${theme.fontSize('FS10')};

  &:hover {
    text-decoration: none;
  }
`;

const Icon = styled.div<{ $colour: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  background-color: ${({ $colour }) => $colour};
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-right: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Picture = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-right: 5px;
`;

const Name = styled.span<{ $colour: string }>`
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
  border-bottom: 1px solid ${({ $colour }) => $colour};
  margin-right: 5px;

  &:hover {
    border-bottom: 0;
  }
`;

export default { User, Icon, Name, Picture };
