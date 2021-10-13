import React, { ComponentType, memo, FC, HTMLAttributes } from 'react';
import { RedirectProps } from 'react-router-dom';

import { Variant } from './enums';
import SC from './styled';

export interface Props extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  variant?: Variant;
}

const RoundedTagPure: FC<Props & Partial<RedirectProps>> = ({
  as,
  variant,
  to,
  children
}) => (
  <SC.RoundedTag as={as} to={to} variant={variant}>
    {children}
  </SC.RoundedTag>
);

export default memo(RoundedTagPure);
export { Variant } from './enums';
