import React, { memo, FC } from 'react';
import { Link } from 'react-scroll';
import Translation from '../../../translation';

import SC from './styled';

export interface MenuItem {
  id: string;
  title: string | null;
}

interface Props {
  menuItems?: MenuItem[];
}

const SideMenu: FC<Props> = ({ menuItems = [] }) => (
  <SC.SideMenu>
    <SC.Menu>
      <SC.Title>
        <Translation id='sidemenu.heading' />
      </SC.Title>
      <ul>
        {menuItems.map(
          ({ id, title: menuItemTitle }) =>
            menuItemTitle && (
              <SC.MenuItem key={id}>
                <Link to={id} smooth isDynamic spy>
                  {menuItemTitle}
                </Link>
              </SC.MenuItem>
            )
        )}
      </ul>
    </SC.Menu>
  </SC.SideMenu>
);

export default memo(SideMenu);
