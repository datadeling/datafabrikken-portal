import React, { memo, FC, PropsWithChildren, Children } from 'react';

import SC from './styled';

interface Props {
  column?: boolean;
  hasBorder?: boolean;
}

const InlineList: FC<PropsWithChildren<Props>> = ({
  column,
  hasBorder,
  children,
  ...props
}) => (
  <SC.List $column={column} $hasBorder={hasBorder} {...props}>
    {Children.map(
      children,
      child => child && <SC.ListItem>{child}</SC.ListItem>
    )}
  </SC.List>
);

export default memo(InlineList);
