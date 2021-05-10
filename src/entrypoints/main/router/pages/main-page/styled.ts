import styled from 'styled-components';

import DataPackagesBase from '../../../../../images/data-packages.svg';
import NatureImage from '../../../../../images/nature.jpg';

const MainPage = styled.article`
  background-image: url(${NatureImage});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colour.neutral.N10};
  font-size: 3rem;
`;

const DataPackages = styled(DataPackagesBase)`
  height: 250px;

  @media (max-width: 900px) {
    height: 150px;
  }
`;

export default { MainPage, Title, DataPackages };
