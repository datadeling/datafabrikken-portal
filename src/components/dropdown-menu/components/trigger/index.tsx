import React, { FC, PropsWithChildren } from 'react';

export interface Props {}

export const Trigger: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>{children}</>
);

export default Trigger;
