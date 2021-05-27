import React, { FC, memo, PropsWithChildren } from 'react';

import SC from './styled';

interface Props {}

const ContentBox: FC<PropsWithChildren<Props>> = ({ children }) => (
  <SC.ContentBox>{children}</SC.ContentBox>
);

export default memo(ContentBox);
