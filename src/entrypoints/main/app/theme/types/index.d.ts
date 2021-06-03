import { defaultTheme as theme, Token } from '..';

export type Theme = typeof theme;
export type ThemeProps = { theme?: Theme };
export type Colour = Theme[Token.COLOUR];
