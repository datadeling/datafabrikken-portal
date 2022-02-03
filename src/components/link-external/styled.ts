import styled from 'styled-components';

const ExternalLink = styled.a`
  text-decoration: underline;

  & > svg {
    height: 20px;
    width: 20px;

    * {
      animation-play-state: paused !important;
    }
  }

  &:hover {
    & > svg * {
      animation-play-state: running !important;
    }
  }
`;

export default { ExternalLink };
