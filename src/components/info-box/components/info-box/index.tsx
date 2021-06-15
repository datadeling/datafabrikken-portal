import React, { ComponentType, FC, memo, PropsWithChildren } from 'react';

import SC from './styled';

interface Props {
  to?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const InfoBox: FC<PropsWithChildren<Props>> = ({ children, as, ...props }) => (
  <SC.InfoBox as={as} {...props}>
    {children}
  </SC.InfoBox>
);

export default memo(InfoBox);
