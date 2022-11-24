import React, { FC, PropsWithChildren, memo, useState, useEffect } from 'react';
import { compose } from 'redux';

import service from '../../services/auth';

import Context from './context';

interface Props extends PropsWithChildren<any> {}

const AuthProvider: FC<Props> = ({ children }) => {
  const [isInitialised, setIsInitialised] = useState(false);

  const init = async () => {
    setIsInitialised(true);
    await service.init();
  };

  useEffect(() => {
    if (!isInitialised) {
      init();
    }
  }, []);

  return <Context.Provider value={{ service }}>{children}</Context.Provider>;
};

export default compose<FC<Props>>(memo)(AuthProvider);
export { withAuth } from './hoc';
export type { ServiceProps as Props } from './hoc';
