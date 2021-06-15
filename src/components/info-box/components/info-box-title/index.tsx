import React, { ComponentType, memo, FC, PropsWithChildren } from 'react';

import SC from './styled';

interface Props {
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const InfoBoxTitle: FC<PropsWithChildren<Props>> = ({ as, children }) => (
  <SC.Title as={as}>{children}</SC.Title>
);

export default memo(InfoBoxTitle);
