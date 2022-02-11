import styled, { css } from 'styled-components';
import { Colour, theme } from '../../entrypoints/main/app/theme';

interface containerProps {
  height: number;
  width: number;
  $src: string;
  $showGif: boolean;
}

const GifContainer = styled.div<containerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  aspect-ratio: ${({ width, height }) => width / height};
  max-width: 100%;
  max-height: 100%;

  font-size: ${theme.fontSize('FS12')};
  font-weight: ${theme.fontWeight('FW400')};
  color: ${theme.colour(Colour.BLUE, 'B56')};

  background: ${({ $src, $showGif }) =>
    $showGif ? `url(${$src})` : theme.colour(Colour.BLUE, 'B52', 25)};
`;

const Background = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  background: ${theme.colour(Colour.BLUE, 'B52')};
  opacity: 0.25;
`;

const AccessibleGif = styled.img`
  visibility: collapse;
  height: 0px;
  width: 0px;
`;

const ButtonStyle = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: transparent;
  border: none;

  width: 100%;
  height: 100%;

  cursor: pointer;

  & > svg {
    height: 80px;
    width: 80px;
    margin-bottom: ${theme.spacing('S8')};
    & path {
      stroke-width: 0.4px;
      fill: 0px;
    }
  }

  & * {
    animation-play-state: paused !important;
  }

  &:hover * {
    animation-play-state: running !important;
  }
`;

const PlayButton = styled.button`
  ${ButtonStyle}
`;

const PauseButton = styled.button`
  ${ButtonStyle}
  & * {
    visibility: hidden;
  }

  &:hover {
    background: ${theme.colour(Colour.NEUTRAL, 'N0', 50)};
    & * {
      visibility: visible;
    }
  }
`;

export default {
  GifContainer,
  Background,
  AccessibleGif,
  PlayButton,
  PauseButton
};
