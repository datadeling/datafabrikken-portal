import React, { FC } from 'react';

import SC from './styled';
import translations from '../../../../services/translations';
import LinkIcon from '../../../icons/link-icon';

const Error400: FC = () => (
  <SC.Error400>
    <SC.Error404Icon />
    <SC.Title>{translations.translate('errorPage.clientError.title')}</SC.Title>
    <SC.SubTitle>
      {translations.translate('errorPage.clientError.content')}
    </SC.SubTitle>
    <SC.Link to='/'>
      {translations.translate('errorPage.clientError.backLink')}
      <LinkIcon />
    </SC.Link>
  </SC.Error400>
);

export default Error400;
