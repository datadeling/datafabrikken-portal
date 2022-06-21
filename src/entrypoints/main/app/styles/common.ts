import { css } from 'styled-components';
import { Colour, theme } from '../theme';

export default css`
  html,
  body {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: ${theme.colour(Colour.BLUE, 'B54')};
  }

  body,
  #root {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  body.no-scroll {
    overflow: hidden;
  }
`;
