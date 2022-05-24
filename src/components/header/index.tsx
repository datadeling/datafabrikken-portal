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
      <SC.Nav role='navigation'>
        <SC.Logo href='/'>
          <Translation id='title' />
        </SC.Logo>
        <SC.NavigationLinks>
          <li>
            <SC.PlainLink href={PATHNAME.ABOUT}>
              <Translation id='header.about' />
            </SC.PlainLink>
          </li>
          <li>
            <SC.Link to={PATHNAME.FIND_DATA}>
              <Translation id='header.findData' />
            </SC.Link>
          </li>
          <li>
            <SC.PlainLink href={PATHNAME.NEWS}>
              <Translation id='header.news' />
            </SC.PlainLink>
          </li>
          <li>
            <SC.PlainLink href={PATHNAME.COURSES}>
              <Translation id='header.courses' />
            </SC.PlainLink>
          </li>
          <li>
            <SC.PlainLink href={PATHNAME.GUIDANCE}>
              <Translation id='header.guidance' />
            </SC.PlainLink>
          </li>
          <li>
            <SC.Link to={PATHNAME.COMMUNITY}>
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
              <SC.Burger open={isDropdownMenuOpen}>
                <div />
                <div />
                <div />
              </SC.Burger>
              <span>Meny</span>
            </SC.MenuButton>
          </Trigger>
          <Menu>
            <SC.Menu>
              <li>
                <SC.PlainLink
                  href={PATHNAME.MAIN}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.home' />
                </SC.PlainLink>
              </li>
              <li>
                <SC.PlainLink
                  href={PATHNAME.ABOUT}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.about' />
                </SC.PlainLink>
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
                <SC.PlainLink
                  href={PATHNAME.NEWS}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.news' />
                </SC.PlainLink>
              </li>
              <li>
                <SC.PlainLink
                  href={PATHNAME.COURSES}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.courses' />
                </SC.PlainLink>
              </li>
              <li>
                <SC.PlainLink
                  href={PATHNAME.GUIDANCE}
                  onClick={() => closeDropdownMenu()}
                >
                  <Translation id='header.guidance' />
                </SC.PlainLink>
              </li>
              <li>
                <SC.Link
                  to={PATHNAME.COMMUNITY}
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
