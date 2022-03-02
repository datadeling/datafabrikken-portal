import React, { FC } from 'react';

import SC from './styled';

interface Props {
  light?: boolean;
}

const LinkIcon: FC<Props> = () => <SC.LinkIcon />;

export default LinkIcon;
