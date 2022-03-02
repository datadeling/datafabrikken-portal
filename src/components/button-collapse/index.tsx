import React, {
  FC,
  ComponentPropsWithoutRef,
  memo,
  PropsWithChildren
} from 'react';

import CollapseDownIcon from '../icons/collapse-down-icon';

import SC from './styled';

export interface Props extends ComponentPropsWithoutRef<'button'> {
  open?: boolean;
}

const CollapseButton: FC<PropsWithChildren<Props>> = ({
  open = false,
  children,
  ...props
}) => (
  <SC.CollapseButton $caretUp={open} {...props}>
    {children}
    <CollapseDownIcon />
  </SC.CollapseButton>
);

export default memo(CollapseButton);
