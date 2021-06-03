import { Colour, Token } from './enums';

export default {
  [Token.COLOUR]: {
    [Colour.NEUTRAL]: {
      N0: '#ffffff',
      N10: '#f7f7f7',
      N15: '#eeeff0',
      N20: '#dfe1e2',
      N30: '#d5d7d9',
      N40: '#969ba0',
      N50: '#6c737a',
      N60: '#2d3741',
      N70: '#121619'
    },
    [Colour.BLUE]: {
      B20: '#f0f3f7',
      B30: '#d5e1f2',
      B50: '#335380',
      B70: '#00dbe9'
    },
    [Colour.CYAN]: {
      C20: '#f0f6f7',
      C30: '#d5edf2',
      C50: '#2e6773'
    }
  }
};
