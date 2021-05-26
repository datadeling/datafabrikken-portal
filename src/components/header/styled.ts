import styled from 'styled-components';
import { Link as LinkBase } from 'react-router-dom';

import DropdownMenuBase from '../dropdown-menu';

const onMobileView = '@media (max-width: 900px)';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${({ theme }) => theme.colour.neutral.N60};

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
      margin: 0 3em;
    }
  }

  ${onMobileView} {
    & {
      margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Link = styled(LinkBase)`
  padding-bottom: 0.5em;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 10px;
    width: 0;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colour.blue.B70};
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
    color: ${({ theme }) => theme.colour.neutral.N0};
  }

  & > li:nth-of-type(n + 2) {
    margin-left: 2em;
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
  padding: 1em 1.5em;
  border: none;
  background: none;
  text-align: left;
  white-space: pre;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colour.neutral.N10};
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
    margin-left: 0.5em;
  }
`;

const Menu = styled.ul`
  position: relative;
  border-radius: 5px;
  background: ${({ theme }) => theme.colour.neutral.N0};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1;

  & > li > a {
    display: block;
    padding: 1em 2em;
    white-space: pre;

    &:hover {
      background: ${({ theme }) => theme.colour.neutral.N10};
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
    background-color: ${({ theme }) => theme.colour.neutral.N20};
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0.5em 1em;
    overflow: visible;
    text-align: center;
    clip: auto;
    z-index: 1;
  }
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.colour.neutral.N0};
  font-size: 2rem;
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
