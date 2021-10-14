import React, { memo, FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Breadcrumbs from '../../../components/breadcrumbs';
import Header from '../../../components/header';
import Analytics from '../../../components/analytics';

import Routes from './routes';

const Router: FC = () => (
  <BrowserRouter>
    <Analytics />
    <Header />
    <Breadcrumbs />
    <Suspense fallback={null}>
      <Routes />
    </Suspense>
  </BrowserRouter>
);

export default memo(Router);
