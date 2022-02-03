import React, { FC, PropsWithChildren } from 'react';
import LinkIcon from '../icons/link-icon';

import SC from './styled';

interface Props {
  to: string;
  showIcon?: boolean;
}

const InternalLink: FC<PropsWithChildren<Props>> = ({
  to,
  showIcon = true,
  children,
  ...props
}) => (
  <SC.InternalLink>
    <SC.RouterLink to={to} {...props}>
      {children}
    </SC.RouterLink>
    {showIcon && <LinkIcon />}
  </SC.InternalLink>
);

export default InternalLink;
