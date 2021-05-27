import React, { FC, memo } from 'react';

import SC from './styled';

import Translation from '../translation';

interface Props {}

const Footer: FC<Props> = () => (
  <SC.Footer>
    <SC.Content>
      <SC.Title>
        <Translation id='footer.title' />
      </SC.Title>
    </SC.Content>
    <SC.ByLine>
      <span>
        <Translation id='footer.byLine' />
      </span>
    </SC.ByLine>
  </SC.Footer>
);

export default memo(Footer);
