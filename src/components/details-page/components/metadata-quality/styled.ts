import styled from 'styled-components';
import { Colour, theme } from '../../../../entrypoints/main/app/theme';

import QualityIconExcellent from '../../../../images/smiley-excellent.inline.svg';
import QualityIconGood from '../../../../images/smiley-good.inline.svg';
import QualityIconOk from '../../../../images/smiley-ok.inline.svg';
import QualityIconPoor from '../../../../images/smiley-poor.inline.svg';

const onMobileView = '@media (max-width: 900px)';

const MetadataQuality = styled.div`
  display: flex;
  align-items: center;

  & a {
    border-bottom: 3px solid ${theme.colour(Colour.BLUE, 'B16')};
  }
`;

const RatingIcon = styled.div`
  height: 35px;
  width: 35px;
  margin: ${theme.spacing('S4')};

  & path,
  circle {
    stroke: ${theme.colour(Colour.NEUTRAL, 'N0')};
    stroke-width: 1px;
    fill: transparent;
  }

  ${onMobileView} {
    height: 20px;
    width: 20px;
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
