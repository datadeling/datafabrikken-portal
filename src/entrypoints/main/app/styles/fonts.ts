import { css } from 'styled-components';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@100;300;400;500;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Icons&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

  html,
  * {
    font-family: Rubik, sans-serif;
    font-display: swap;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
`;
