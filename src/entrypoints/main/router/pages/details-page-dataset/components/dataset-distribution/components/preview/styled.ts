import styled from 'styled-components';

import ClearIconBase from '../../../../../../../../../images/icon-clear.inline.svg';

import { theme, Colour } from '../../../../../../../app/theme';

const Modal = styled.div<{ show?: boolean }>`
  z-index: 9999999;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translate(0, 0);
  border-radius: 0px;
  padding: 2rem;

  & > div:last-child {
    flex-grow: 1;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`;

const ClearIcon = styled(ClearIconBase)`
  width: 20px;
  height: 20px;
  margin-right: ${theme.spacing('S2')};

  & > path {
    fill: ${theme.colour(Colour.NEUTRAL, 'N70')};
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${theme.colour(Colour.BLUE, 'B20')};
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
  border: none;
  padding: ${theme.spacing('S10')};
  min-width: 100px;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > span {
    max-width: 70%;
  }
`;

export default {
  Modal,
  Container,
  Header,
  ClearIcon,
  CloseButton,
  Center
};
