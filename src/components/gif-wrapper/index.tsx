import React, { FC, memo, useState } from 'react';
import PauseIcon from '../icons/pause-icon';
import PlayIcon from '../icons/play-icon';
import Translation from '../translation';

import SC from './styled';

interface Props {
  src: string;
  alt?: string;
  height: number;
  width: number;
}

const GifWrapper: FC<Props> = ({ src, alt, height, width }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <SC.GifContainer
      height={height}
      width={width}
      $src={src}
      $showGif={!hidden}
    >
      <SC.AccessibleGif src={src} alt={alt} />

      {hidden ? (
        <SC.PlayButton onClick={() => setHidden(false)}>
          <PlayIcon />
          <Translation id='community.comments.gif.play' />
        </SC.PlayButton>
      ) : (
        <SC.PauseButton onClick={() => setHidden(true)}>
          <PauseIcon />
          <span>
            <Translation id='community.comments.gif.pause' />
          </span>
        </SC.PauseButton>
      )}
    </SC.GifContainer>
  );
};

export default memo<FC<Props>>(GifWrapper);
