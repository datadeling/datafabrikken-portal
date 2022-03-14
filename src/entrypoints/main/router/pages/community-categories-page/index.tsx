import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';

import withPage, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-page';

import withCommunityCategories, {
  Props as CommunityCategoriesProps
} from '../../../../../components/with-community-categories';

import CommunityIcon from '../../../../../images/service-community.inline.svg';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';
import CommunityMenu from '../../../../../components/community/menu';

import Category from './components/category';

import SC from './styled';
import { categorySorter } from '../../../../../utils/community/utils';
import Markdown from '../../../../../components/markdown';

const articleId = '7e856b1b-0f96-44fe-b4c3-7a30a3140fb7';

interface Props extends CmsArticleProps, CommunityCategoriesProps {}

const CommunityCategoriesPage: FC<Props> = ({
  cmsPage,
  cmsPageActions: { getCmsPageRequested: getCmsPage, resetCmsPage },
  communityCategories,
  communityCategoriesActions: {
    getCategoriesRequested: getCategories,
    resetCategories
  }
}) => {
  useEffect(() => {
    getCmsPage(articleId);
    getCategories();
    return () => {
      resetCmsPage();
      resetCategories();
    };
  }, []);

  return (
    <Root>
      <Container>
        <SC.Page>
          <CommunityMenu />
          <SC.Header>
            <SC.TitleContainer>
              <SC.Title>{cmsPage?.title}</SC.Title>
              <SC.Ingress>
                <Markdown allowHtml>
                  {cmsPage?.field_modules[0]?.field_body?.value ?? ''}
                </Markdown>
              </SC.Ingress>
            </SC.TitleContainer>
            <SC.IconWrapper>
              <CommunityIcon />
            </SC.IconWrapper>
          </SC.Header>
          <SC.Categories>
            {communityCategories
              .filter(
                category =>
                  !(category.disabled || category.slug.includes('/prosjekter'))
              )
              .sort(categorySorter)
              .map((category, index) => (
                <Category key={`category-${index}`} category={category} />
              ))}
          </SC.Categories>
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(
  memo,
  withPage,
  withCommunityCategories
)(CommunityCategoriesPage);
