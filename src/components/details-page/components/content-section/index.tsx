import React, { FC, PropsWithChildren } from 'react';

import TruncatedText from '../../../truncated-text';

import SC from './styled';
import { Formatted } from '../../../../services/translations';
import { Colour, theme } from '../../../../entrypoints/main/app/theme';

interface Props {
  id: string;
  title: string | Formatted[];
  boxStyle?: boolean;
  truncate?: boolean;
}

const ContentSection: FC<PropsWithChildren<Props>> = ({
  id,
  title,
  boxStyle = false,
  truncate,
  children
}) => (
  <SC.ContentSection id={id} $boxStyle={boxStyle}>
    <SC.Header>
      <SC.Title>{title}</SC.Title>
    </SC.Header>

    {truncate ? (
      <TruncatedText
        visibleLines={4}
        lineHeight={20}
        backgroundColour={theme.colour(Colour.BLUE, 'B02')}
      >
        {children}
      </TruncatedText>
    ) : (
      children
    )}
  </SC.ContentSection>
);

export default ContentSection;
