import React, { memo, FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Breadcrumbs from '../../../components/breadcrumbs';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

import Routes from './routes';

const Router: FC = () => (
  <BrowserRouter>
    <Header />
    <Breadcrumbs />
    <Suspense fallback={null}>
      <Routes />
    </Suspense>
    <Footer />
  </BrowserRouter>
);

export default memo(Router);
