import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const SearchHit = styled.div`
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0 2px 4px ${theme.colour(Colour.NEUTRAL, 'N70')};
  color: ${theme.colour(Colour.BLUE, 'B52')};
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize('FS12')};
  padding: ${theme.spacing('S20')};
  margin-bottom: ${theme.spacing('S20')};

  ${onMobileView} {
    padding: ${theme.spacing('S10')};
    margin-bottom: ${theme.spacing('S8')};
  }
`;

const Title = styled.h3`
  display: inline-flex;
  font-size: ${theme.fontSize('FS18')};
  margin-bottom: ${theme.spacing('S4')};

  ${onMobileView} {
    font-size: ${theme.fontSize('FS12')};
  }
`;

const Publisher = styled.div`
  font-size: ${theme.fontSize('FS10')};
  margin-bottom: ${theme.spacing('S16')};
  & > span:nth-of-type(n + 2) {
    margin-left: ${theme.spacing('S2')};
  }
`;

const Description = styled.div`
  font-size: ${theme.fontSize('FS12')};
  line-height: 1.5;

  ${onMobileView} {
    font-size: ${theme.fontSize('FS10')};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${theme.spacing('S6')};
`;

export default { SearchHit, Publisher, Title, Description, Tags };
