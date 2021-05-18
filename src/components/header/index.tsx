import React, { memo, FC, useState } from 'react';
import { compose } from 'redux';

import { Trigger, Menu } from '../dropdown-menu';

import Translation from '../translation';

import SC from './styled';

import {
  withTranslations,
  Props as TranslationsProps,
  Language
} from '../../providers/translations';

interface Props extends TranslationsProps {}

const Header: FC<Props> = ({ translationsService }) => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const openLanguageMenu = () => setIsLanguageMenuOpen(true);
  const closeLanguageMenu = () => setIsLanguageMenuOpen(false);

  const handleChangeLanguage = (language: Language) => () => {
    translationsService.changeLanguage(language);
    closeLanguageMenu();
  };

  return (
    <SC.Header>
      <SC.SkipLink href='#main'>
        <Translation id='header.mainContent' />
      </SC.SkipLink>
      <SC.Nav role='navigation'>
        <SC.NavigationLinks>
          <li>
            <SC.Link to='#'>
              <Translation id='header.about' />
            </SC.Link>
          </li>
          <li>
            <SC.LanguageMenu
              isOpen={isLanguageMenuOpen}
              onClose={closeLanguageMenu}
            >
              <Trigger>
                <SC.MenuButton onClick={openLanguageMenu}>
                  <Translation id='lang.chosenLanguage' />
                </SC.MenuButton>
              </Trigger>
              <Menu>
                <SC.Menu>
                  <li>
                    <SC.ButtonItem onClick={handleChangeLanguage(Language.NB)}>
                      <Translation id='lang.norwegian-nb' />
                    </SC.ButtonItem>
                  </li>
                  <li>
                    <SC.ButtonItem onClick={handleChangeLanguage(Language.NN)}>
                      <Translation id='lang.norwegian-nn' />
                    </SC.ButtonItem>
                  </li>
                  <li>
                    <SC.ButtonItem onClick={handleChangeLanguage(Language.EN)}>
                      <Translation id='lang.english-en' />
                    </SC.ButtonItem>
                  </li>
                </SC.Menu>
              </Menu>
            </SC.LanguageMenu>
          </li>
        </SC.NavigationLinks>
      </SC.Nav>
    </SC.Header>
  );
};

export default compose<FC>(memo, withTranslations)(Header);
