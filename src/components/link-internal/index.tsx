import React, { FC, PropsWithChildren } from 'react';
import LinkIcon from '../icons/link-icon';

import SC from './styled';

interface Props {
  to: string;
  hideIcon?: boolean;
}

const InternalLink: FC<PropsWithChildren<Props>> = ({
  to,
  hideIcon = false,
  children,
  ...props
}) => (
  <SC.InternalLink to={to} {...props}>
    {children}
    {!hideIcon && <LinkIcon />}
  </SC.InternalLink>
);

export default InternalLink;
