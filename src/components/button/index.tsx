import React, {
  FC,
  ComponentPropsWithoutRef,
  memo,
  PropsWithChildren
} from 'react';

import SC from './styled';

export interface Props extends ComponentPropsWithoutRef<'button'> {
  active?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({
  active = false,
  children,
  ...props
}) => (
  <SC.Button $active={active} {...props}>
    {children}
  </SC.Button>
);

export default memo(Button);
