import styled from 'styled-components';

import { theme, Colour } from '../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Page = styled.article`
  line-height: 1.5;
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  ${onMobileView} {
    font-size: ${theme.fontSize('FS18')};
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing('S12')};
`;

const Tags = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  & > a {
    margin-right: ${theme.spacing('S4')};
    margin-bottom: ${theme.spacing('S10')};
  }
  & > a > span {
    background-color: ${theme.colour(Colour.BLUE, 'B44')};
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }

  ${onMobileView} {
    font-size: ${theme.fontSize('FS8')};
  }
`;

export default {
  Page,
  Title,
  TagsWrapper,
  Tags
};
