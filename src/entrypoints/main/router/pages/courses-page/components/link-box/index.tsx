import React, { FC, memo, PropsWithChildren } from 'react';
import ExternalLink from '../../../../../../../components/link-external';
import SC from './styled';

interface Props {
  titleHref: string;
  title: string;
  body: string;
  column?: boolean;
}

const CourseCard: FC<PropsWithChildren<Props>> = ({
  titleHref,
  title,
  body,
  column,
  children
}) => (
  <SC.Container $column={column}>
    {children && <SC.IconContainer>{children}</SC.IconContainer>}
    <SC.TextContainer>
      <ExternalLink href={titleHref}>{title}</ExternalLink>
      <p>{body}</p>
    </SC.TextContainer>
  </SC.Container>
);

export default memo(CourseCard);
