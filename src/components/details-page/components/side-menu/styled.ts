import styled from 'styled-components';

import { Colour, theme } from '../../../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const SideMenu = styled.aside`
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
  display: flex;
  flex: 0 0 20%;

  ${onMobileView} {
    display: none;
  }
`;

const Title = styled.h3`
  margin-bottom: ${theme.spacing('S8')};
  font-size: ${theme.fontSize('FS16')};
`;

const Menu = styled.nav`
  padding: 0 ${theme.spacing('S10')};

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }

  & > ul > li {
    border-bottom: 2px solid ${theme.colour(Colour.BLUE, 'B16')};

    &:hover {
      border-bottom: 2px solid transparent;
    }
  }
`;

const MenuItem = styled.li`
  margin: ${theme.spacing('S4')} 0px;
  list-style: none;
  font-size: ${theme.fontSize('FS12')};

  & > a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default { SideMenu, Title, Menu, MenuItem };
