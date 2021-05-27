import styled from 'styled-components';

const onMobileView = '@media (max-width: 900px)';

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  ${onMobileView} {
    flex-basis: 100%;
  }
`;

export default { ContentBox };
