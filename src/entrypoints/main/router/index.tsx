import React, { memo, FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Breadcrumbs from '../../../components/breadcrumbs';
import Header from '../../../components/header';

import Routes from './routes';

const Router: FC = () => (
  <BrowserRouter>
    <Header />
    <Breadcrumbs />
    <Suspense fallback={null}>
      <Routes />
    </Suspense>
  </BrowserRouter>
);

export default memo(Router);
