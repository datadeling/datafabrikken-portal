import React, { ComponentType, memo, FC, PropsWithChildren } from 'react';

import SC from './styled';

interface Props {
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const InfoBoxBody: FC<PropsWithChildren<Props>> = ({ as, children }) => (
  <SC.Body as={as}>{children}</SC.Body>
);

export default memo(InfoBoxBody);
