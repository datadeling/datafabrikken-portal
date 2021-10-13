import React, { FC, PropsWithChildren } from 'react';
import SC from './styled';
import ExternalLinkIcon from '../icons/external-link-icon';

interface Props {
  href: string;
  openInNewTab?: boolean;
  [extraProps: string]: any;
}

const ExternalLink: FC<PropsWithChildren<Props>> = ({
  href,
  openInNewTab,
  children,
  ...props
}) => (
  <SC.ExternalLink
    {...props}
    href={href}
    target={openInNewTab ? '_blank' : '_self'}
    rel='noreferrer'
  >
    {children}
    <ExternalLinkIcon />
  </SC.ExternalLink>
);

export default ExternalLink;
