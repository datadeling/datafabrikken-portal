import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';

import { PARAGRAPH } from '../../enums';
import {
  getParagraphBodyProcessed,
  getParagraphBodyValue,
  getParagraphImage
} from '../../utils/drupal-values';
import { convertToSanitizedHtml } from '../../utils/markdown-converter';

import { Variant as ContainerVariant } from '../container';
import { InfoBox, InfoBoxBody, InfoBoxTitle } from '../info-box';

import SC from './styled';
import { CmsArticle } from '../../types';

interface Props {
  article: Partial<CmsArticle>;
}

export const renderModule = (module: any) => {
  switch (module.type) {
    case PARAGRAPH.BODY:
      return (
        <SC.Body
          key={module.id}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: convertToSanitizedHtml(getParagraphBodyValue(module))
          }}
        />
      );
    case PARAGRAPH.QUOTE:
      return (
        <SC.Quote
          key={module.id}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: convertToSanitizedHtml(getParagraphBodyProcessed(module))
          }}
        />
      );
    case PARAGRAPH.IMAGE: {
      const image = getParagraphImage(module);
      return (
        <SC.ImageWrapper key={module.id}>
          <SC.Image
            alt={image?.meta?.alt}
            src={image?.download_urls?.canonical}
          />
          <SC.ImageText>{module.field_image?.field_ingress}</SC.ImageText>
        </SC.ImageWrapper>
      );
    }
    case PARAGRAPH.INFO_BOX: {
      const infoBoxUrl = module?.field_link?.uri?.replace('internal:', '');
      const r = new RegExp('^(?:[a-z]+:)?//', 'i');
      const isAbsoluteUrl = r.test(infoBoxUrl) ?? false;
      return (
        <InfoBox
          key={module.id}
          {...(isAbsoluteUrl
            ? { href: module.field_link?.uri, target: '_blank' }
            : { as: RouterLink, to: infoBoxUrl })}
          invertColor
        >
          <InfoBoxTitle>
            <h2>{module.field_link?.title}</h2>
          </InfoBoxTitle>
          <InfoBoxBody truncate={false}>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: convertToSanitizedHtml(module.field_body?.processed)
              }}
            />
          </InfoBoxBody>
        </InfoBox>
      );
    }
    default:
      return null;
  }
};

const Article: FC<Props> = ({ article }) => {
  const title = article?.title;
  const ingress = article?.field_ingress;
  const modules = article?.field_modules;
  return (
    <SC.Article>
      <Helmet>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={ingress} />
        <meta name='og:description' content={ingress} />
      </Helmet>
      <SC.Header>
        <SC.Container variant={ContainerVariant.WIDTH_720}>
          <SC.Title>{title}</SC.Title>
          {ingress && (
            <SC.Ingress
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: convertToSanitizedHtml(ingress)
              }}
            />
          )}
        </SC.Container>
      </SC.Header>
      <SC.Container variant={ContainerVariant.WIDTH_720}>
        {modules?.map((module: any) => renderModule(module))}
      </SC.Container>
    </SC.Article>
  );
};

export default memo(Article);
