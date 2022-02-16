import React, { FC, memo } from 'react';
import { articleIds } from '../../../entrypoints/main/router/pages/article-page-strapi/articles';
import { useGetFancyArticleQuery } from '../../../services/api/generated/cms/graphql';

export const StrapiArticleBreadcrumb: FC = () => {
  const { data } = useGetFancyArticleQuery({
    variables: { id: articleIds[window.location.pathname] }
  });
  return <span>{data?.fancyArticle?.title ?? ''}</span>;
};

export default memo(StrapiArticleBreadcrumb);
