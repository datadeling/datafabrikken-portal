import React, { memo, FC, PropsWithChildren, ReactNode } from 'react';

import SC from './styled';

interface Props {
  property: string | ReactNode;
  value: string | ReactNode;
  $highlighted?: boolean;
  $valuesAsList?: boolean;
}

const KeyValueListItem: FC<PropsWithChildren<Props>> = ({
  property,
  value,
  ...props
}) => (
  <SC.ListItem {...props}>
    {property && <SC.Property>{property}</SC.Property>}
    <SC.Value {...props}>{value}</SC.Value>
  </SC.ListItem>
);

export default memo(KeyValueListItem);
