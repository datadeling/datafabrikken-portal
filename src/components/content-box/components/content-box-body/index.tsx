import React, { ComponentType, memo, FC, PropsWithChildren } from 'react';

import SC from './styled';

interface Props {
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const ContentBoxBody: FC<PropsWithChildren<Props>> = ({ as, children }) => (
  <SC.ContentBoxBody as={as}>{children}</SC.ContentBoxBody>
);

export default memo(ContentBoxBody);
