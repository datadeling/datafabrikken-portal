import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';
import LinkSC from '../link/styled';

const Root = styled.div`
  background-color: ${theme.colour(Colour.BLUE, 'B52')};
  margin-top: 80px;
`;

const BreadCrumb = styled.div`
  align-items: center;
  display: inline-flex;
  margin-right: ${theme.spacing('S2')};
`;

const BreadCrumbs = styled.div`
  align-items: center;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  display: flex;
  font-size: 0.9rem;
  padding: ${theme.spacing('S16')} 0;
  ${BreadCrumb}:not(:last-child):after {
    font-family: 'Material Icons';
    content: '\\e5cc';
    font-size: ${theme.fontSize('FS12')};
    margin-left: ${theme.spacing('S2')};
  }
  ${LinkSC.Link} {
    align-self: center;
  }
`;

export default { Root, BreadCrumbs, BreadCrumb };
