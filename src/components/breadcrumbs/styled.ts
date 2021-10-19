import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';
import LinkSC from '../link/styled';

const onMobileView = '@media (max-width: 900px)';

const Root = styled.div`
  background-color: ${theme.colour(Colour.BLUE, 'B52')};
  margin-top: 80px;
  ${onMobileView} {
    & {
      margin-top: calc(55px + (80 - 55) * ((100vw - 320px) / (900 - 320)));
    }
  }
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

  ${BreadCrumb}:not(:first-child):before {
    font-family: 'Material Icons';
    content: '\\e5cc';
    font-size: ${theme.fontSize('FS12')};
    margin-right: ${theme.spacing('S2')};
  }

  ${onMobileView} {
    ${BreadCrumb} {
      display: none;
    }
    ${BreadCrumb}:nth-last-child(2) {
      display: flex;
    }
    ${BreadCrumb}:nth-last-child(2):before {
      display: flex;
      font-family: 'Material Icons';
      content: '\\f1e6';
      font-size: ${theme.fontSize('FS12')};
      margin-right: ${theme.spacing('S2')};
    }
  }

  ${LinkSC.Link} {
    align-self: center;
  }
`;

export default { Root, BreadCrumbs, BreadCrumb };
