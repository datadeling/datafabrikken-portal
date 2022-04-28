import styled from 'styled-components';

import { Link as LinkBase } from 'react-router-dom';

import { theme, Colour } from '../../../entrypoints/main/app/theme';

import TopicIconBase from '../../../images/icon-topic.inline.svg';

import SearchBarSC from '../../search-bar/styled';

const onMobileView = '@media (max-width: 900px)';

const MenuWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  & > ${SearchBarSC.SearchBar} {
    height: 40px;

    & > ${SearchBarSC.SearchField} {
      font-size: ${theme.fontSize('FS12')};
    }

    & > ${SearchBarSC.ClearButton} {
      display: flex;
    }

    & > ${SearchBarSC.SearchButton} {
      display: flex;

      & > ${SearchBarSC.SearchIcon} {
        width: 1.5em;
      }
    }
  }
`;

const Link = styled(LinkBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${theme.spacing('S4')};
  position: relative;
  white-space: nowrap;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    width: 0;
    margin: 0 auto;
    background-color: ${theme.colour(Colour.BLUE, 'B16')};
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

const ExternalLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${theme.spacing('S4')};
  position: relative;
  white-space: nowrap;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    width: 0;
    margin: 0 auto;
    background-color: ${theme.colour(Colour.BLUE, 'B16')};
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

const Menu = styled.ul`
  display: flex;
  gap: ${theme.spacing('S12')};
  padding-top: ${theme.spacing('S10')};
  padding-bottom: ${theme.spacing('S10')};

  ${onMobileView} {
    justify-content: space-between;
    gap: 0;
  }
`;

const TopicIcon = styled(TopicIconBase)`
  path {
    stroke: ${theme.colour(Colour.BLUE, 'B16')};
  }
`;

export default { MenuWrapper, Link, ExternalLink, Menu, TopicIcon };
