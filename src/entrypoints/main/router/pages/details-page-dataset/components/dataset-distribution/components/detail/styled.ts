import styled from 'styled-components';
import { theme, Colour } from '../../../../../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const Detail = styled.div`
  display: flex;
  padding: ${theme.spacing('S10')};
  background-color: ${theme.colour(Colour.NEUTRAL, 'N02')};
  border-top: 1px solid ${theme.colour(Colour.NEUTRAL, 'N15')};
  word-break: break-word;

  ${onMobileView} {
    flex-direction: column;
  }
`;

const Property = styled.div`
  flex-basis: 30%;
  ${onMobileView} {
    font-weight: ${theme.fontWeight('FW400')};
    margin-bottom: ${theme.spacing('S4')};
  }
`;

const Value = styled.div`
  flex-basis: 70%;
`;

export default { Detail, Property, Value };
