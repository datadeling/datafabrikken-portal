import React, { FC, memo, PropsWithChildren } from 'react';

import SC from './styled';

import IllustrationNodesBlue from '../../images/illustration-nodes-blue.svg';
import IllustrationNodesNeutral from '../../images/illustration-nodes-neutral.svg';

interface Props {}

const ParallaxContainer: FC<PropsWithChildren<Props>> = ({ children }) => (
  <SC.ParallaxBanner
    layers={[
      {
        image: IllustrationNodesNeutral,
        amount: 0.2,
        props: {
          style: {
            backgroundSize: '100%',
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'left top'
          }
        }
      },
      {
        image: IllustrationNodesBlue,
        amount: 0.1,
        props: {
          style: {
            backgroundSize: '100%',
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'left top'
          }
        }
      }
    ]}
    style={{
      height: '100%'
    }}
  >
    {children}
  </SC.ParallaxBanner>
);

export default memo(ParallaxContainer);
