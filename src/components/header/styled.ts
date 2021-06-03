import styled from 'styled-components';
import { Link as LinkBase } from 'react-router-dom';

import { theme, Colour } from '../../entrypoints/main/app/theme';
import DropdownMenuBase from '../dropdown-menu';

const onMobileView = '@media (max-width: 900px)';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${theme.colour(Colour.NEUTRAL, 'N60')};

  ${onMobileView} {
    & {
      height: calc(55px + (80 - 55) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1204px) {
    & {
      width: 100%;
      margin: 0 ${theme.spacing('S32')};
    }
  }

  ${onMobileView} {
    & {
      margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Link = styled(LinkBase)`
  padding-bottom: ${theme.spacing('S6')};
  position: relative;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 8px;
    width: 0;
    margin: 0 auto;
    background-color: ${theme.colour(Colour.BLUE, 'B70')};
  }
  &:hover {
    &:after {
      left: 0;
      right: auto;
      width: 100%;
      transition: width 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
    }
  }
`;

const NavigationLinks = styled.ul`
  display: flex;
  margin-left: auto;

  & > li {
    flex: 0 0 auto;
  }

  & > li * {
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }

  & > li:nth-of-type(n + 2) {
    margin-left: ${theme.spacing('S24')};
  }

  ${onMobileView} {
    & {
      display: none;
    }
  }
`;

const LanguageMenu = styled(DropdownMenuBase)`
  display: flex;
  margin-left: auto;
`;

const ButtonItem = styled.button`
  width: 100%;
  height: 100%;
  padding: ${theme.spacing('S10')} ${theme.spacing('S16')};
  border: none;
  background: none;
  text-align: left;
  white-space: pre;
  cursor: pointer;

  &:hover {
    background: ${theme.colour(Colour.NEUTRAL, 'N10')};
  }

  ${onMobileView} {
    padding: 14px 28px 14px 28px;
  }
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:after {
    content: '\\25BC';
    font-size: 10px;
    margin-top: 1px;
    margin-left: ${theme.spacing('S6')};
  }
`;

const Menu = styled.ul`
  position: relative;
  border-radius: 5px;
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1;

  & > li > * {
    color: ${theme.colour(Colour.NEUTRAL, 'N60')};
    display: block;
    white-space: pre;

    &:hover {
      background: ${theme.colour(Colour.NEUTRAL, 'N10')};
    }
  }
`;

const SkipLink = styled.a`
  border: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  &:focus,
  &:active {
    background-color: ${theme.colour(Colour.NEUTRAL, 'N20')};
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    margin: 0;
    padding: ${theme.spacing('S6')} ${theme.spacing('S10')};
    overflow: visible;
    text-align: center;
    clip: auto;
    z-index: 1;
  }
`;

const Logo = styled.a`
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  font-size: ${theme.fontSize('FS20')};
  font-weight: 600;
`;

export default {
  Header,
  Nav,
  NavigationLinks,
  LanguageMenu,
  ButtonItem,
  MenuButton,
  Menu,
  Link,
  SkipLink,
  Logo
};
