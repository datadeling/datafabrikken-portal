import React, {
  FC,
  ComponentPropsWithoutRef,
  memo,
  PropsWithChildren,
  ComponentType
} from 'react';

import SC from './styled';
import { Variant } from './enums';

export interface Props extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant;
  showIcon?: boolean;
  to?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const Link: FC<PropsWithChildren<Props>> = ({ children, as, ...props }) => (
  <SC.Link as={as} {...props}>
    {children}
  </SC.Link>
);

export default memo(Link);
export { Variant } from './enums';
