import React, {
  FC,
  ComponentPropsWithoutRef,
  memo,
  PropsWithChildren
} from 'react';

import ArrowIcon from '../../images/icon-arrow-right-regular.inline.svg';

import SC from './styled';

export interface Props extends ComponentPropsWithoutRef<'button'> {
  active?: boolean;
  arrowDown?: boolean;
}

const SortButton: FC<PropsWithChildren<Props>> = ({
  active = false,
  arrowDown = true,
  children,
  ...props
}) => (
  <SC.SortButton $active={active} $arrowDown={arrowDown} {...props}>
    {children}
    <ArrowIcon />
  </SC.SortButton>
);

export default memo(SortButton);
