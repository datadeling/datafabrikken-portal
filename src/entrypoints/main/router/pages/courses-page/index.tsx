import React, { memo, FC, useEffect } from 'react';
import { compose } from 'redux';

import SC from './styled';
import ErrorPage from '../../../../../components/error-page';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import withPage, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-page';
import Root from '../../../../../components/root';

import { courses } from './courses';
import CourseCard from './components/course-card';
import { Variant } from '../../../../../components/container';

interface Props extends CmsArticleProps {}

const cmsId = '29c9f124-25d4-4fa8-9869-45a38da394ed';

const CoursesPage: FC<Props> = ({
  cmsPage,
  cmsPageActions: { getCmsPageRequested: getCmsPage, resetCmsPage }
}) => {
  useEffect(() => {
    getCmsPage(cmsId);
    return () => {
      resetCmsPage();
    };
  }, []);

  return (
    <Root>
      <SC.Header>
        <SC.Container variant={Variant.WIDTH_720}>
          <SC.Title>{cmsPage?.title}</SC.Title>
          <SC.Subtitle>{cmsPage?.field_ingress}</SC.Subtitle>
        </SC.Container>
      </SC.Header>
      <SC.CourseSection>
        <SC.Container>
          <SC.CourseCardContainer>
            {courses.map(course => (
              <CourseCard course={course} />
            ))}
          </SC.CourseCardContainer>
        </SC.Container>
      </SC.CourseSection>
    </Root>
  );
};

export default compose<FC>(
  memo,
  withPage,
  withErrorBoundary(ErrorPage)
)(CoursesPage);
