import React, {
  FC,
  ComponentPropsWithoutRef,
  memo,
  PropsWithChildren,
  ComponentType
} from 'react';

import LinkIcon from '../icons/link-icon';
import ExternalLinkIcon from '../icons/external-link-icon';

import SC from './styled';
import { Variant } from './enums';

export interface Props extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant;
  hideIcon?: boolean;
  external?: boolean;
  to?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const Link: FC<PropsWithChildren<Props>> = ({
  variant,
  hideIcon = false,
  children,
  external,
  ...props
}) => (
  <SC.Link $variant={variant} $external={external} {...props}>
    {children}
    {!hideIcon && !external && <LinkIcon />}
    {!hideIcon && external && <ExternalLinkIcon />}
  </SC.Link>
);

export default memo(Link);
export { Variant } from './enums';
