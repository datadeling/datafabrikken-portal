import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import { Link as RouterLink } from 'react-router-dom';

import withPage, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-page';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';

import {
  InfoBox,
  InfoBoxBody,
  InfoBoxTitle,
  InfoBoxIcon
} from '../../../../../components/info-box';
import { PARAGRAPH } from '../../../../../enums';

import DatasetIcon from '../../../../../images/service-data-search.inline.svg';
import DatasourcesIcon from '../../../../../images/service-data-sources.inline.svg';
import CommunityIcon from '../../../../../images/service-community.inline.svg';
import GuidanceIcon from '../../../../../images/service-guide.inline.svg';

import { Entity } from './enums';
import SC from './styled';
import Markdown from '../../../../../components/markdown';

const articleId = '8d6ed4d9-f2b9-4d24-9561-595af3876240';

interface Props extends CmsArticleProps {}

export const renderModule = (module: any) => {
  const moduleIcons: Record<any, any> = {
    [Entity.DATASETS]: {
      icon: DatasetIcon
    },
    [Entity.DATASOURCES]: {
      icon: DatasourcesIcon
    },
    [Entity.COMMUNITY]: {
      icon: CommunityIcon
    },
    [Entity.GUIDANCE]: {
      icon: GuidanceIcon
    }
  };

  switch (module.type) {
    case PARAGRAPH.INFO_BOX: {
      const entity = moduleIcons[module.field_title];
      const Icon = entity?.icon ?? undefined;
      const infoBoxUrl = module?.field_link?.uri?.replace('internal:', '');
      const r = new RegExp('^(?:[a-z]+:)?//', 'i');
      const isAbsoluteUrl = r.test(infoBoxUrl) ?? false;
      return (
        <InfoBox
          key={module.id}
          {...(isAbsoluteUrl
            ? { href: module.field_link?.uri, target: '_blank' }
            : { as: RouterLink, to: infoBoxUrl })}
        >
          {Icon && (
            <InfoBoxIcon>
              <Icon />
            </InfoBoxIcon>
          )}
          <InfoBoxTitle>{module.field_link?.title}</InfoBoxTitle>
          <InfoBoxBody>
            <Markdown allowHtml>{module.field_body?.processed}</Markdown>
          </InfoBoxBody>
        </InfoBox>
      );
    }
    default:
      return null;
  }
};

const FindDataPage: FC<Props> = ({
  cmsPage,
  cmsPageActions: { getCmsPageRequested: getCmsPage, resetCmsPage }
}) => {
  useEffect(() => {
    getCmsPage(articleId);
    return () => {
      resetCmsPage();
    };
  }, []);

  const modules = cmsPage?.field_modules ?? [];

  return (
    <Root>
      <Container>
        <SC.Page>
          <SC.Title>{cmsPage?.title}</SC.Title>
          <SC.Content>
            {modules?.map((module: any) => renderModule(module))}
          </SC.Content>
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(memo, withPage)(FindDataPage);
