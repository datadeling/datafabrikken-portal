import React, {
  memo,
  FC,
  PropsWithChildren,
  Children,
  isValidElement,
  ReactElement
} from 'react';

import KeyValueListItem from '../key-value-list-item';

import SC from './styled';

interface Props {
  $highlighted?: boolean;
}

const KeyValueList: FC<PropsWithChildren<Props>> = ({
  children,
  $highlighted,
  ...props
}) => (
  <SC.List {...props}>
    {Children.map(children, child => {
      if (isValidElement(child) && child.type === KeyValueListItem) {
        const item = child as ReactElement<PropsWithChildren<Props>>;
        return React.cloneElement(item, {
          $highlighted
        });
      }

      return null;
    })}
  </SC.List>
);

export default memo(KeyValueList);
