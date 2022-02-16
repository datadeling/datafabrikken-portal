import React, { memo, FC } from 'react';
import { compose } from 'redux';

import SC from './styled';
import ErrorPage from '../../../../../components/error-page';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import Root from '../../../../../components/root';
import CourseCard from '../../../../../components/info-card';

import { useGetCoursesQuery } from '../../../../../services/api/generated/cms/graphql';

interface Props {}

const CoursesPage: FC<Props> = () => {
  const { data } = useGetCoursesQuery();
  const { courses, topArticle } = data ?? {};

  return (
    <Root>
      <SC.Header>
        <SC.Container>
          <SC.Title>{topArticle?.title}</SC.Title>
          <SC.Subtitle>
            {topArticle?.content?.[0]?.__typename ===
              'ComponentBasicParagraph' && topArticle.content[0].content}
          </SC.Subtitle>
        </SC.Container>
      </SC.Header>
      <SC.CourseSection>
        <SC.Container>
          <SC.CourseCardContainer>
            {courses?.map(course => (
              <CourseCard infoObject={course} />
            ))}
          </SC.CourseCardContainer>
        </SC.Container>
      </SC.CourseSection>
    </Root>
  );
};

export default compose<FC>(memo, withErrorBoundary(ErrorPage))(CoursesPage);
