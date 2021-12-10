import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';

import { PARAGRAPH } from '../../enums';
import {
  getParagraphBodyProcessed,
  getParagraphBodyValue,
  getParagraphImage
} from '../../utils/drupal-values';

import { Variant as ContainerVariant } from '../container';
import { InfoBox, InfoBoxIcon, InfoBoxBody, InfoBoxTitle } from '../info-box';
import Markdown from '../markdown';

import SC from './styled';
import { CmsArticle } from '../../types';

import SearchForDataIllustration from '../../images/illustration-search-for-data.inline.svg';
import ContactIllustration from '../../images/illustration-contact.inline.svg';
import CommunityIllustration from '../../images/illustration-community.inline.svg';
import CourseIllustration from '../../images/illustration-course.inline.svg';

interface Props {
  article: Partial<CmsArticle>;
}

export const renderModule = (module: any) => {
  switch (module.type) {
    case PARAGRAPH.BODY:
      return (
        <SC.Body key={module.id}>
          <Markdown allowHtml>{getParagraphBodyValue(module)}</Markdown>
        </SC.Body>
      );
    case PARAGRAPH.QUOTE:
      return (
        <SC.Quote key={module.id}>
          <Markdown allowHtml>{getParagraphBodyProcessed(module)}</Markdown>
        </SC.Quote>
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

      const renderInfoBoxIcon = () => {
        if (infoBoxUrl?.includes('finn-data')) {
          return (
            <InfoBoxIcon>
              <SearchForDataIllustration />
            </InfoBoxIcon>
          );
        }
        if (infoBoxUrl?.includes('kontakt')) {
          return (
            <InfoBoxIcon>
              <ContactIllustration />
            </InfoBoxIcon>
          );
        }
        if (infoBoxUrl?.includes('nyttige-kurs')) {
          return (
            <InfoBoxIcon>
              <CourseIllustration />
            </InfoBoxIcon>
          );
        }
        if (infoBoxUrl?.includes('datalandsbyen')) {
          return (
            <InfoBoxIcon>
              <CommunityIllustration />
            </InfoBoxIcon>
          );
        }

        return null;
      };

      return (
        <SC.InfoBoxWrapper>
          <InfoBox
            key={module.id}
            {...(isAbsoluteUrl
              ? { href: module.field_link?.uri, target: '_blank' }
              : { as: RouterLink, to: infoBoxUrl })}
            invertColor
          >
            {renderInfoBoxIcon()}
            <InfoBoxTitle invertColor>
              <h2>{module.field_link?.title}</h2>
            </InfoBoxTitle>
            <InfoBoxBody truncate={false}>
              <Markdown allowHtml>{module.field_body?.processed}</Markdown>
            </InfoBoxBody>
          </InfoBox>
        </SC.InfoBoxWrapper>
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
            <SC.Ingress>
              <Markdown allowHtml>{ingress}</Markdown>
            </SC.Ingress>
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
