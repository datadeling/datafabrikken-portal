import ExpansionPanel, { SC } from '@fellesdatakatalog/expansion-panel';
import styled from 'styled-components';

import { theme, Colour } from '../../../../../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const DatasetDistribution = styled(ExpansionPanel)`
  overflow: hidden;
  border-radius: 0;
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0px 2.3px 3.6px rgba(0, 0, 0, 0.017),
    0px 6.3px 10px rgba(0, 0, 0, 0.025), 0px 15.1px 24.1px rgba(0, 0, 0, 0.033),
    0px 50px 80px rgba(0, 0, 0, 0.05);

  &:nth-of-type(n + 3) {
    border-top: 2px solid ${theme.colour(Colour.NEUTRAL, 'N15')};
  }

  & > ${SC.ExpansionPanel.Head} {
    padding: ${theme.spacing('S10')};

    & > ${SC.ExpansionPanel.HeadContent} {
      flex: 1;
      min-width: 0;
    }

    & > ${SC.ExpansionPanel.HeadExpansionIndicator} {
      margin-left: 24px;
      & > svg > path {
        fill: ${theme.colour(Colour.NEUTRAL, 'N70')};
      }
    }
  }

  & > ${SC.ExpansionPanel.Body} {
  }

  & h3 {
    font-size: ${theme.fontSize('FS12')};
    ${onMobileView} {
      font-size: ${theme.fontSize('FS10')};
    }
  }
`;

const Section = styled.div`
  padding: ${theme.spacing('S10')};
  background-color: ${theme.colour(Colour.NEUTRAL, 'N02')};
  border-top: 1px solid #dfe1e2;
  display: flex;
`;

const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${theme.spacing('S12')};
  margin-right: ${theme.spacing('S8')};
  background-color: ${theme.colour(Colour.BLUE, 'B20')};
  & > svg {
    height: 25px;
    width: 25px;
    margin-left: ${theme.spacing('S4')};

    * {
      animation-play-state: paused !important;
    }
  }

  &:hover > svg * {
    animation-play-state: running !important;
  }
`;

const PreviewLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${theme.spacing('S12')};
  background-color: ${theme.colour(Colour.BLUE, 'B20')};
  & > svg {
    transform: scale(1.25);
    margin-left: ${theme.spacing('S4')};

    * {
      animation-play-state: paused !important;
    }
  }

  &:hover > svg * {
    animation-play-state: running !important;
  }
`;

export default {
  DatasetDistribution,
  Section,
  DownloadLink,
  PreviewLink
};
