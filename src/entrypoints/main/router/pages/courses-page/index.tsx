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
import { renderModule } from '../../../../../components/article';

interface Props extends CmsArticleProps {}

const cmsId = '9199dbc8-7f33-4876-9c98-306864651933';

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
      <SC.Content>
        <SC.Container>
          <SC.Body variant={Variant.WIDTH_720}>
            {cmsPage?.field_modules &&
              cmsPage.field_modules.map((module: any) => renderModule(module))}
          </SC.Body>
        </SC.Container>
      </SC.Content>
    </Root>
  );
};

export default compose<FC>(
  memo,
  withPage,
  withErrorBoundary(ErrorPage)
)(CoursesPage);
