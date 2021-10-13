import styled from 'styled-components';
import { theme, Colour } from '../../../../../../../app/theme';

const Detail = styled.div`
  display: flex;
  padding: ${theme.spacing('S10')};
  background-color: ${theme.colour(Colour.NEUTRAL, 'N02')};
  border-top: 1px solid ${theme.colour(Colour.NEUTRAL, 'N15')};
  word-break: break-word;
`;

const Property = styled.div`
  flex-basis: 30%;
`;

const Value = styled.div`
  flex-basis: 70%;
`;

export default { Detail, Property, Value };
