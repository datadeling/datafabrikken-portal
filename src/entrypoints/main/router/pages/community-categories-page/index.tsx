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

import Category from './components/category';

import { convertToSanitizedHtml } from '../../../../../utils/markdown-converter';

import SC from './styled';
import { categorySorter } from '../../../../../utils/community/utils';

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
          <SC.Title>{cmsPage?.title}</SC.Title>
          <SC.IngressRow>
            <SC.Ingress
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: convertToSanitizedHtml(
                  cmsPage?.field_modules[0]?.field_body?.value ?? ''
                )
              }}
            />
            <SC.IconWrapper>
              <CommunityIcon />
            </SC.IconWrapper>
          </SC.IngressRow>
          {communityCategories
            .filter(category => !category.disabled)
            .sort(categorySorter)
            .map((category, index) => (
              <Category key={`category-${index}`} category={category} />
            ))}
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
