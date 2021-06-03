import defaultTheme from './themes';
import { Token } from './enums';

import { valueToHex } from './utils';

import type { ThemeProps, Colour } from './types';

const getTheme = ({ theme = defaultTheme }: ThemeProps) => theme;
const getColour = (props: ThemeProps) => getTheme(props)[Token.COLOUR];

export const selectColour =
  <C extends keyof Colour>(
    colour: C,
    variant: keyof Colour[C],
    opacity?: number
  ) =>
  (props: ThemeProps) =>
    `${getColour(props)[colour][variant]}${valueToHex(opacity)}`;
