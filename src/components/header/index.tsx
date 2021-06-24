import React, { memo, FC, useState } from 'react';
import { compose } from 'redux';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Translation from '../translation';

import SC from './styled';

import { Trigger, Menu } from '../dropdown-menu';

import { PATHNAME } from '../../enums';

interface Props {}

const Header: FC<Props> = () => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const bodyElement = document.querySelector('body');

  const openDropdownMenu = () => {
    setIsDropdownMenuOpen(true);
    if (bodyElement) {
      disableBodyScroll(bodyElement);
    }
  };

  const closeDropdownMenu = () => {
    setIsDropdownMenuOpen(false);
    if (bodyElement) {
      enableBodyScroll(bodyElement);
    }
  };

  return (
    <SC.Header>
      <SC.SkipLink href='#main'>
        <Translation id='header.mainContent' />
      </SC.SkipLink>
      <SC.BetaIcon />
      <SC.Nav role='navigation'>
        <SC.Logo href='/'>
          <Translation id='title' />
        </SC.Logo>
        <SC.NavigationLinks>
          <li>
            <SC.Link to={PATHNAME.MAIN}>
              <Translation id='header.home' />
            </SC.Link>
          </li>
          <li>
            <SC.Link to={PATHNAME.ABOUT}>
              <Translation id='header.about' />
            </SC.Link>
          </li>
          <li>
            <SC.Link to={PATHNAME.FIND_DATA}>
              <Translation id='header.findData' />
            </SC.Link>
          </li>
          <li>
            <SC.Link to={PATHNAME.NEWS}>
              <Translation id='header.news' />
            </SC.Link>
          </li>
          <li>
            <SC.Link to={PATHNAME.CONTACT}>
              <Translation id='header.contact' />
            </SC.Link>
          </li>
          <li>
            <SC.Link to={PATHNAME.DATA_COMMUNITY}>
              <Translation id='header.community' />
            </SC.Link>
          </li>
        </SC.NavigationLinks>
        <SC.DropdownMenu
          isOpen={isDropdownMenuOpen}
          onClose={closeDropdownMenu}
        >
          <Trigger>
            <SC.MenuButton onClick={openDropdownMenu}>
              {isDropdownMenuOpen ? <SC.CloseIcon /> : <SC.HamburgerIcon />}
              Meny
            </SC.MenuButton>
          </Trigger>
          <Menu>
            <SC.Menu>
              <li>
                <SC.Link to={PATHNAME.MAIN} onClick={() => closeDropdownMenu()}>
                  <Translation id='header.home' />
                </SC.Link>
              </li>
              <li>
                <SC.Link
                  to={PATHNAME.ABOUT}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.about' />
                </SC.Link>
              </li>
              <li>
                <SC.Link
                  to={PATHNAME.FIND_DATA}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.findData' />
                </SC.Link>
              </li>
              <li>
                <SC.Link to={PATHNAME.NEWS} onClick={() => closeDropdownMenu()}>
                  <Translation id='header.news' />
                </SC.Link>
              </li>
              <li>
                <SC.Link
                  to={PATHNAME.CONTACT}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.contact' />
                </SC.Link>
              </li>
              <li>
                <SC.Link
                  to={PATHNAME.DATA_COMMUNITY}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.community' />
                </SC.Link>
              </li>
            </SC.Menu>
          </Menu>
        </SC.DropdownMenu>
      </SC.Nav>
    </SC.Header>
  );
};

export default compose<FC>(memo)(Header);
