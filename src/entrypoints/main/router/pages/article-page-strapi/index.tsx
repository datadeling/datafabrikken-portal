import React, { FC, memo } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { articleIds } from './articles';
import SC from './styled';
import Root from '../../../../../components/root';
import { useGetFancyArticleQuery } from '../../../../../services/api/generated/cms/graphql';
import { isBasicParagraph } from '../../../../../utils/strapi';
import Markdown from '../../../../../components/markdown';
import ArticleSC from '../../../../../components/article/styled';
import { Variant as ContainerVariant } from '../../../../../components/container';

export const ArticlePageStrapi: FC<RouteComponentProps> = ({
  location: { pathname }
}) => {
  const { data } = useGetFancyArticleQuery({
    variables: { id: articleIds[pathname] }
  });

  return (
    <Root invertColor>
      <SC.Header>
        <SC.Container $variant={ContainerVariant.WIDTH_720}>
          <SC.Title>{data?.fancyArticle?.title}</SC.Title>
          <SC.Subtitle>{data?.fancyArticle?.subtitle}</SC.Subtitle>
        </SC.Container>
      </SC.Header>
      <SC.ContentSection>
        {data?.fancyArticle?.content?.map(
          paragraph =>
            isBasicParagraph(paragraph) && (
              <SC.ParagraphBackground>
                <SC.Container $variant={ContainerVariant.WIDTH_720}>
                  <ArticleSC.Body>
                    <Markdown>{paragraph?.content ?? ''}</Markdown>
                  </ArticleSC.Body>
                </SC.Container>
              </SC.ParagraphBackground>
            )
        )}
      </SC.ContentSection>
    </Root>
  );
};

export default memo(ArticlePageStrapi);
