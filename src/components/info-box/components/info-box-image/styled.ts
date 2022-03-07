import styled from 'styled-components';

import InfoBoxSC from '../info-box/styled';

const InfoBoxImage = styled.div`
  & > img:nth-child(2) {
    display: none;
  }

  ${InfoBoxSC.InfoBox}:hover & {
    & > img:first-child {
      display: none;
    }
    & > img:nth-child(2) {
      display: inline;
    }
  }
`;

export default {
  InfoBoxImage
};
