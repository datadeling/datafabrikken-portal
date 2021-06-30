import React, { memo, FC, PropsWithChildren } from 'react';

import Footer from '../footer';

import SC from './styled';
import ScrollToTop from '../scroll-to-top';

interface Props {
  invertColor?: boolean;
}

const Root: FC<PropsWithChildren<Props>> = ({
  invertColor = false,
  children
}) => (
  <SC.Root $invertColor={invertColor}>
    {children}
    <ScrollToTop />
    <Footer />
  </SC.Root>
);

export default memo(Root);
