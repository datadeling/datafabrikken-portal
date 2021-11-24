import React, { FC, memo } from 'react';
import { Course } from '../../../../../../../types';
import ExternalLink from '../../../../../../../components/link-external';
import SC from './styled';

interface Props {
  course: Course;
}

const CourseCard: FC<Props> = ({
  course: {
    image,
    type,
    link,
    title,
    description,
    time,
    modules,
    provider,
    inverted
  }
}) => (
  <SC.Card>
    <SC.Image src={image} />
    <SC.CourseContent $inverted={!!inverted}>
      {type}
      <h3>
        <ExternalLink href={link}>{title}</ExternalLink>
      </h3>
      <p>{description}</p>
      <SC.CourseFacts>
        <span>{time}</span>
        <span>{modules}</span>
      </SC.CourseFacts>
    </SC.CourseContent>
    {provider && (
      <>
        <SC.WigglyLine $inverted={!!inverted} />
        <SC.CourseProvider $inverted={!!inverted}>
          <SC.ProviderLogo src={provider.logo} alt='Tilbyderlogo' />
          {provider.subtitle}
        </SC.CourseProvider>
      </>
    )}
  </SC.Card>
);

export default memo(CourseCard);
