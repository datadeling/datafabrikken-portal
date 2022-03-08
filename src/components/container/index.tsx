import React, { memo, FC, PropsWithChildren } from 'react';

import SC from './styled';
import { Variant } from './enums';

interface Props {
  variant?: Variant;
}

const Container: FC<PropsWithChildren<Props>> = ({ variant, children }) => (
  <SC.Container $variant={variant}>{children}</SC.Container>
);

export default memo(Container);
export { Variant } from './enums';
