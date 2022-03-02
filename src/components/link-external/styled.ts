import styled from 'styled-components';

const ExternalLink = styled.a`
  text-decoration: underline;

  & > svg {
    height: 20px;
    width: 20px;
    vertical-align: middle;
  }
`;

export default { ExternalLink };
