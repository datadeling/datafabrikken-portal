import styled from 'styled-components';
import { Colour, theme } from '../../../../entrypoints/main/app/theme';

import QualityIconExcellent from '../../../../images/smiley-excellent.inline.svg';
import QualityIconGood from '../../../../images/smiley-good.inline.svg';
import QualityIconOk from '../../../../images/smiley-ok.inline.svg';
import QualityIconPoor from '../../../../images/smiley-poor.inline.svg';

const MetadataQuality = styled.div`
  display: flex;
  align-items: center;

  & p {
    border-bottom: 2px solid ${theme.colour(Colour.BLUE, 'B20')};
  }
`;

const RatingIcon = styled.div`
  height: 25px;
  width: 25px;
  margin: ${theme.spacing('S2')};

  & path,
  circle {
    stroke: ${theme.colour(Colour.NEUTRAL, 'N0')};
    fill: transparent;
  }
`;

export default {
  MetadataQuality,
  RatingIcon,
  QualityIconExcellent,
  QualityIconGood,
  QualityIconOk,
  QualityIconPoor
};
