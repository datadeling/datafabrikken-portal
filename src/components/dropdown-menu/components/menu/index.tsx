import React, { FC, PropsWithChildren } from 'react';

export interface Props {}

export const Menu: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>{children}</>
);

export default Menu;
