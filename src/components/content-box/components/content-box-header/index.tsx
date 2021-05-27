import React, { ComponentType, memo, FC, PropsWithChildren } from 'react';

import SC from './styled';

interface Props {
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const ContentBoxHeader: FC<PropsWithChildren<Props>> = ({ as, children }) => (
  <SC.ContentBoxHeader as={as}>{children}</SC.ContentBoxHeader>
);

export default memo(ContentBoxHeader);
export { Variant } from './enums';
