import React, { FC, PropsWithChildren } from 'react';
import SC from './styled';

interface Props {
  to: string;
}

const InternalLink: FC<PropsWithChildren<Props>> = ({
  to,
  children,
  ...props
}) => (
  <SC.RouterLink to={to} {...props}>
    {children}
  </SC.RouterLink>
);

export default InternalLink;
