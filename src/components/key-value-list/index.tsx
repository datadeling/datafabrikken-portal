import React, {
  memo,
  FC,
  PropsWithChildren,
  Children,
  isValidElement
} from 'react';

import KeyValueListItem from '../key-value-list-item';

import SC from './styled';

interface Props {
  highlighted?: boolean;
}

const KeyValueList: FC<PropsWithChildren<Props>> = ({
  children,
  highlighted,
  ...props
}) => (
  <SC.List {...props}>
    {Children.map(children, child =>
      isValidElement(child) && child.type === KeyValueListItem
        ? React.cloneElement(child, { $highlighted: highlighted })
        : null
    )}
  </SC.List>
);

export default memo(KeyValueList);
