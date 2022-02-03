import React, { ComponentType, memo, FC, PropsWithChildren } from 'react';

import LinkIcon from '../../../icons/link-icon';

import SC from './styled';

interface Props {
  invertColor?: boolean;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const InfoBoxTitle: FC<PropsWithChildren<Props>> = ({
  as,
  children,
  invertColor
}) => (
  <SC.Title as={as} $invertColor={invertColor}>
    <h2>
      {children}
      <LinkIcon />
    </h2>
  </SC.Title>
);

export default memo(InfoBoxTitle);
