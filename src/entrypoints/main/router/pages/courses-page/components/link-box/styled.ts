import styled from 'styled-components';
import ExternalLinkSC from '../../../../../../../components/link-external/styled';
import { Colour, theme } from '../../../../../app/theme';

const Container = styled.div<{ $column?: boolean }>`
  display: flex;
  max-width: 80%;
  padding: ${theme.spacing('S16')};
  margin: ${theme.spacing('S8')};
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0px 0px 2.2px rgba(0, 0, 0, 0.02),
    0px 0px 5.3px rgba(0, 0, 0, 0.028), 0px 0px 10px rgba(0, 0, 0, 0.035),
    0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 33.4px rgba(0, 0, 0, 0.05),
    0px 0px 80px rgba(0, 0, 0, 0.07);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: ${theme.fontSize('FS10')};
  line-height: ${theme.fontSize('FS20')};
  & > ${ExternalLinkSC.ExternalLink} {
    font-size: ${theme.fontSize('FS16')};
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${theme.colour(Colour.BLUE, 'B52')};
    }
  }
`;

const IconContainer = styled.div`
  flex: 0 0 25%;
  max-height: 100px;
  padding-right: ${theme.spacing('S16')};
`;

export default { Container, TextContainer, IconContainer };
