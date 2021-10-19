import React, { memo, FC } from 'react';

interface Props {
  src: string;
  alt: string;
}

const InfoBoxImage: FC<Props> = ({ alt, ...props }) => (
  <img alt={alt} {...props} />
);

export default memo(InfoBoxImage);
