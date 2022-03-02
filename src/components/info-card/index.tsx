import React, { FC, memo } from 'react';
import { compose } from 'redux';
import SC from './styled';
import env from '../../env';
import RoundedTag, { Variant } from '../rounded-tag';
import Translation from '../translation';
import ExternalLinkIcon from '../icons/external-link-icon';
import {
  withTranslations,
  Props as TranslationsProps
} from '../../providers/translations';

const { STRAPI_API_HOST } = env;

interface ExternalProps {
  infoObject: any;
  provider?: any;
}

interface Props extends ExternalProps, TranslationsProps {}

const InfoCard: FC<Props> = ({
  infoObject: {
    featureImage,
    free,
    type,
    link,
    title,
    description,
    durationInMinutes,
    numberOfModules,
    contentType
  },
  provider,
  translationsService
}) => (
  <SC.Card href={link} target='_blank'>
    {featureImage?.url && (
      <SC.Image src={`${STRAPI_API_HOST}${featureImage.url}`} />
    )}
    <SC.CourseContent>
      <SC.Tags>
        {type && (
          <RoundedTag as='div'>
            <span>{translationsService.translate(`infoCard.${type}`)}</span>
          </RoundedTag>
        )}
        {free && (
          <RoundedTag as='div' variant={Variant.SECONDARY}>
            <span>
              <Translation id='infoCard.free' />
            </span>
          </RoundedTag>
        )}
      </SC.Tags>
      <h3>
        {title}
        <ExternalLinkIcon />
      </h3>
      <p>{description}</p>
      <SC.CourseFacts>
        {durationInMinutes && (
          <SC.Fact
            title={`${durationInMinutes} ${translationsService.translate(
              'infoCard.minutes'
            )}`}
          >
            <SC.ClockIcon />
            {`${durationInMinutes} ${translationsService.translate(
              'infoCard.minutes'
            )} ${
              contentType
                ? translationsService.translate(
                    `infoCard.contentType.${contentType}`
                  )
                : ''
            }`}
          </SC.Fact>
        )}
        {numberOfModules && (
          <SC.Fact
            title={`${numberOfModules} ${translationsService.translate(
              'infoCard.modules'
            )}`}
          >
            <SC.BoxIcon />
            {`${numberOfModules} ${translationsService.translate(
              'infoCard.modules'
            )}`}
          </SC.Fact>
        )}
      </SC.CourseFacts>
    </SC.CourseContent>
    {provider?.logo?.url && (
      <SC.CourseProvider>
        <SC.ProviderLogo
          src={`${STRAPI_API_HOST}${provider.logo.url}`}
          alt={
            provider.logo?.alternativeText ??
            translationsService.translate('infoCard.providerLogo')
          }
        />
        {`${translationsService.translate('infoCard.providerText')} ${
          provider.title
        }`}
      </SC.CourseProvider>
    )}
  </SC.Card>
);

export default compose<FC<ExternalProps>>(memo, withTranslations)(InfoCard);
