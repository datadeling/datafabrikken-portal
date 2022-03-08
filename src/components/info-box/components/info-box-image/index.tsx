import React, { memo, FC } from 'react';
import SC from './styled';

interface Props {
  src: string;
  alt: string;
  hoverSrc?: string;
  hoverAlt?: string;
}

const InfoBoxImage: FC<Props> = ({ alt, hoverSrc, hoverAlt, ...props }) => (
  <SC.InfoBoxImage $hasHover={!!hoverSrc}>
    <img {...props} alt={alt} />
    <img {...props} alt={hoverAlt} src={hoverSrc} />
  </SC.InfoBoxImage>
);

export default memo(InfoBoxImage);
