import React, { memo, FC, useState, useRef, useEffect } from 'react';
import { compose } from 'redux';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Translation from '../translation';

import SC from './styled';

import { Trigger, Menu } from '../dropdown-menu';
import { PATHNAME } from '../../enums';

import Logo from '../../images/datafabrikken-logo.inline.svg';

interface Props {}

const useMountEffect = (fun: any) => useEffect(fun, []);

const useOnOutsideClick = (handleOutsideClick: { (): void }) => {
  const innerBorderRef = useRef<HTMLUListElement | null>(null);

  const onClick = (event: any) => {
    if (
      innerBorderRef.current &&
      (!innerBorderRef.current.contains(event.target) ||
        event.target.tagName === 'A')
    ) {
      handleOutsideClick();
    }
  };

  useMountEffect(() => {
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  });

  return { innerBorderRef };
};

const Header: FC<Props> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFindDataMenuOpen, setIsFindDataMenuOpen] = useState(false);
  const [isOfferDataMenuOpen, setIsOfferDataMenuOpen] = useState(false);

  const { innerBorderRef: findDataMenuRef } = useOnOutsideClick(() =>
    setIsFindDataMenuOpen(false)
  );
  const { innerBorderRef: offerDataMenuRef } = useOnOutsideClick(() =>
    setIsOfferDataMenuOpen(false)
  );

  const bodyElement =
    typeof window !== 'undefined' && document.querySelector('body');

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    if (bodyElement) {
      disableBodyScroll(bodyElement);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    if (bodyElement) {
      enableBodyScroll(bodyElement);
    }
  };

  const openFindDataMenu = () => {
    setIsFindDataMenuOpen(true);
  };

  const openOfferDataMenu = () => {
    setIsOfferDataMenuOpen(true);
  };

  return (
    <SC.Header>
      <SC.SkipLink href='#main'>
        <Translation id='header.mainContent' />
      </SC.SkipLink>

      <SC.Nav role='navigation'>
        <SC.Logo href='/'>
          <Logo />
        </SC.Logo>
        <SC.NavigationLinks>
          <li>
            <SC.PlainLink onClick={openFindDataMenu}>
              <Translation id='header.findData' />
              <SC.ExpandIcon />
            </SC.PlainLink>
            <SC.Submenu $open={isFindDataMenuOpen} ref={findDataMenuRef}>
              <li>
                <SC.Link to={`${PATHNAME.FIND_DATA}`}>
                  <Translation id='header.search' />
                </SC.Link>
              </li>
              <li>
                <SC.PlainLink href={`${PATHNAME.USE_DATA}`}>
                  <Translation id='header.gettingStarted' />
                </SC.PlainLink>
              </li>
            </SC.Submenu>
          </li>
          <li>
            <SC.PlainLink onClick={openOfferDataMenu}>
              <Translation id='header.offerData' />
              <SC.ExpandIcon />
            </SC.PlainLink>
            <SC.Submenu $open={isOfferDataMenuOpen} ref={offerDataMenuRef}>
              <li>
                <SC.PlainLink href={`${PATHNAME.OFFER_DATA}`}>
                  <Translation id='header.howOfferData' />
                </SC.PlainLink>
              </li>
              <li>
                <SC.PlainLink
                  href={PATHNAME.WIZARD_FOR_SHARING_DATA}
                  target='blank'
                >
                  <Translation id='header.wizardForSharingData' />
                </SC.PlainLink>
              </li>
            </SC.Submenu>
          </li>
          <li>
            <SC.PlainLink href={PATHNAME.COURSES}>
              <Translation id='header.courses' />
            </SC.PlainLink>
          </li>
          <li>
            <SC.PlainLink href={`${PATHNAME.GUIDANCE}`}>
              <Translation id='header.guidance' />
            </SC.PlainLink>
          </li>
          <li>
            <SC.Link to={PATHNAME.COMMUNITY}>
              <Translation id='header.community' />
            </SC.Link>
          </li>
          <li>
            <SC.PlainLink href={PATHNAME.NEWS}>
              <Translation id='header.news' />
            </SC.PlainLink>
          </li>
        </SC.NavigationLinks>
        <SC.MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
          <Trigger>
            <SC.MenuButton onClick={openMobileMenu}>
              <SC.Burger open={isMobileMenuOpen}>
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
                  onClick={() => closeMobileMenu()}
                >
                  <Translation id='header.home' />
                </SC.PlainLink>
              </li>
              <li>
                <SC.PlainLink onClick={() => closeMobileMenu()}>
                  <Translation id='header.findData' />
                </SC.PlainLink>
                <ul>
                  <li>
                    <SC.Link to={`${PATHNAME.FIND_DATA}`}>
                      <Translation id='header.search' />
                    </SC.Link>
                  </li>
                  <li>
                    <SC.PlainLink href={`${PATHNAME.USE_DATA}`}>
                      <Translation id='header.gettingStarted' />
                    </SC.PlainLink>
                  </li>
                </ul>
              </li>
              <li>
                <SC.PlainLink onClick={() => closeMobileMenu()}>
                  <Translation id='header.offerData' />
                </SC.PlainLink>
                <ul>
                  <li>
                    <SC.PlainLink href={`${PATHNAME.OFFER_DATA}`}>
                      <Translation id='header.howOfferData' />
                    </SC.PlainLink>
                  </li>
                  <li>
                    <SC.PlainLink
                      href={PATHNAME.WIZARD_FOR_SHARING_DATA}
                      target='blank'
                    >
                      <Translation id='header.wizardForSharingData' />
                    </SC.PlainLink>
                  </li>
                </ul>
              </li>
              <li>
                <SC.PlainLink
                  href={PATHNAME.COURSES}
                  onClick={() => closeMobileMenu()}
                >
                  <Translation id='header.courses' />
                </SC.PlainLink>
              </li>
              <li>
                <SC.PlainLink
                  href={PATHNAME.GUIDANCE}
                  onClick={() => closeMobileMenu()}
                >
                  <Translation id='header.guidance' />
                </SC.PlainLink>
              </li>
              <li>
                <SC.Link
                  to={PATHNAME.COMMUNITY}
                  onClick={() => closeMobileMenu()}
                >
                  <Translation id='header.community' />
                </SC.Link>
              </li>
              <li>
                <SC.PlainLink
                  href={PATHNAME.NEWS}
                  onClick={() => closeMobileMenu()}
                >
                  <Translation id='header.news' />
                </SC.PlainLink>
              </li>
            </SC.Menu>
          </Menu>
        </SC.MobileMenu>
      </SC.Nav>
    </SC.Header>
  );
};

export default compose<FC>(memo)(Header);
