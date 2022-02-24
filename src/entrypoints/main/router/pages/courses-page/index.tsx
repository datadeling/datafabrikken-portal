import React, { memo, FC } from 'react';
import { compose } from 'redux';

import SC from './styled';
import ErrorPage from '../../../../../components/error-page';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import Root from '../../../../../components/root';
import CourseCard from '../../../../../components/info-card';

import {
  Provider,
  useGetCoursesQuery
} from '../../../../../services/api/generated/cms/graphql';
import { isBasicParagraph, isProvider } from '../../../../../utils/strapi';

interface Props {}

const CoursesPage: FC<Props> = () => {
  const { data } = useGetCoursesQuery();
  const { courses, providers, topArticle } = data ?? {};
  const providersById =
    providers?.reduce(
      (previous, provider) =>
        isProvider(provider)
          ? {
              ...previous,
              [provider.id]: provider
            }
          : previous,
      {} as Record<string, Provider>
    ) ?? {};
  // eslint-disable-next-line no-console
  console.log({ data, providers });

  return (
    <Root>
      <SC.Header>
        <SC.Container>
          <SC.Title>{topArticle?.title}</SC.Title>
          <SC.Subtitle>
            {isBasicParagraph(topArticle?.content?.[0]) &&
              topArticle?.content?.[0].content}
          </SC.Subtitle>
        </SC.Container>
      </SC.Header>
      <SC.CourseSection>
        <SC.Container>
          <SC.CourseCardContainer>
            {courses?.map(course => (
              <CourseCard
                infoObject={course}
                provider={
                  course?.providerId && providersById[course.providerId]
                }
              />
            ))}
          </SC.CourseCardContainer>
        </SC.Container>
      </SC.CourseSection>
    </Root>
  );
};

export default compose<FC>(memo, withErrorBoundary(ErrorPage))(CoursesPage);
