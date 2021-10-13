import React, { FC } from 'react';

import Error500Icon from '../../../../images/illustration-404.inline.svg';
import translations from '../../../../services/translations';

import SC from './styled';

const Error500: FC = () => (
  <SC.Error500>
    <Error500Icon />
    <h1>{translations.translate('errorPage.serverError.title')}</h1>
    <p>{translations.translate('errorPage.serverError.content1')}</p>
    <p>{translations.translate('errorPage.serverError.content2')}</p>
  </SC.Error500>
);

export default Error500;
