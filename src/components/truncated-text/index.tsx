import React, {
  FC,
  PropsWithChildren,
  useState,
  useRef,
  useEffect
} from 'react';

import useResize from './hooks';

import Translation from '../translation';

import SC from './styled';
import { ThemeProps } from '../../entrypoints/main/app/theme/types';

interface Props {
  visibleLines: number;
  lineHeight: number;
  backgroundColour?: (props: ThemeProps) => string;
}

const TruncatedText: FC<PropsWithChildren<Props>> = ({
  visibleLines,
  lineHeight,
  backgroundColour,
  children
}) => {
  const [expanded, setExpanded] = useState(false);
  const [truncate, setTruncated] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const { height } = useResize(ref);

  useEffect(() => {
    setTruncated(height / lineHeight > visibleLines + 3);
  }, [height]);

  return (
    <SC.TruncateContainer>
      <SC.TextContent
        ref={ref}
        lineHeight={lineHeight}
        truncate={truncate && !expanded}
        visibleLines={visibleLines + 1}
        backgroundColour={backgroundColour}
      >
        {children}
      </SC.TextContent>
      {truncate && (
        <SC.ExpandButton onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <Translation id='truncatedText.expanded' />
          ) : (
            <Translation id='truncatedText.collapsed' />
          )}
        </SC.ExpandButton>
      )}
    </SC.TruncateContainer>
  );
};

export default TruncatedText;
