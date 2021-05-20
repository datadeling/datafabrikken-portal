import styled from 'styled-components';

const onMobileView = '@media (max-width: 900px)';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 300px;
  padding: 4em 0;
  background: ${({ theme }) => theme.colour.neutral.N70};

  ${onMobileView} {
    padding: 3em 0;
    & {
      height: calc(55px + (200 - 55) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Content = styled.div`
  display: flex;
  width: 1140px;
  margin: 0 auto;

  ${onMobileView} {
    & {
      margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colour.neutral.N0};
`;

export default { Footer, Content, Title };
