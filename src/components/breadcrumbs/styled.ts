import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';
import LinkSC from '../link/styled';

const onMobileView = '@media (max-width: 900px)';

const Root = styled.div`
  background-color: ${theme.colour(Colour.BLUE, 'B54')};
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
  white-space: nowrap;
  margin-right: ${theme.spacing('S2')};
`;

const BreadCrumbs = styled.div`
  align-items: center;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  display: flex;
  font-size: 0.9rem;
  padding: ${theme.spacing('S16')} 0;

  ${BreadCrumb}:last-child > span {
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${BreadCrumb}:not(:first-child):before {
    content: '';
    width: 24px;
    height: 16px;
    background-image: url('data:image/svg+xml,%3Csvg%20width%3D%226%22%20height%3D%2210%22%20viewBox%3D%220%200%206%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.6875%201.0625L4.625%204.99999L0.6875%208.9375%22%20stroke%3D%22white%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A');
    background-repeat: no-repeat;
    background-size: 7px;
    background-position: center top;
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
      content: '';
      width: 24px;
      height: 16px;
      background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2213%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.92832%201.69806C6.12314%201.50236%206.12242%201.18577%205.92671%200.990955C5.73101%200.796137%205.41442%200.796856%205.21961%200.992562L5.92832%201.69806ZM0.772411%206.16873L0.418055%205.81598L0.0653057%206.17033L0.419661%206.52308L0.772411%206.16873ZM5.24308%2011.3246C5.43879%2011.5195%205.75537%2011.5187%205.95019%2011.323C6.14501%2011.1273%206.14429%2010.8107%205.94858%2010.6159L5.24308%2011.3246ZM11.711%206.64387C11.9872%206.64324%2012.2105%206.41888%2012.2099%206.14274C12.2093%205.86659%2011.9849%205.64325%2011.7087%205.64387L11.711%206.64387ZM5.21961%200.992562L0.418055%205.81598L1.12677%206.52148L5.92832%201.69806L5.21961%200.992562ZM0.419661%206.52308L5.24308%2011.3246L5.94858%2010.6159L1.12516%205.81437L0.419661%206.52308ZM11.7087%205.64387L0.771274%205.66873L0.773547%206.66873L11.711%206.64387L11.7087%205.64387Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A');
      background-repeat: no-repeat;
      background-size: 14px;
      background-position: center top;
    }
  }

  ${LinkSC.Link} {
    align-self: center;
  }
`;

export default { Root, BreadCrumbs, BreadCrumb };
