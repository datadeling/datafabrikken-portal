import styled from 'styled-components';

import { Link as LinkBase } from 'react-router-dom';

import { theme, Colour } from '../../../entrypoints/main/app/theme';

import TopicIconBase from '../../../images/icon-topic.inline.svg';

const Link = styled(LinkBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${theme.spacing('S4')};
  position: relative;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    width: 0;
    margin: 0 auto;
    background-color: ${theme.colour(Colour.BLUE, 'B20')};
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
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    width: 0;
    margin: 0 auto;
    background-color: ${theme.colour(Colour.BLUE, 'B20')};
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
`;

const TopicIcon = styled(TopicIconBase)`
  path {
    stroke: ${theme.colour(Colour.BLUE, 'B20')};
  }
`;

export default { Link, ExternalLink, Menu, TopicIcon };
