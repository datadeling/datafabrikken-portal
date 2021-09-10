import React, {
  FC,
  ComponentPropsWithoutRef,
  memo,
  PropsWithChildren,
  ComponentType
} from 'react';

import LinkIcon from '../icons/link-icon';

import SC from './styled';
import { Variant } from './enums';

export interface Props extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant;
  showIcon?: boolean;
  to?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const Link: FC<PropsWithChildren<Props>> = ({
  variant,
  showIcon = true,
  children,
  ...props
}) => (
  <SC.Link $variant={variant} {...props}>
    {children}
    {showIcon && <LinkIcon />}
  </SC.Link>
);

export default memo(Link);
export { Variant } from './enums';
