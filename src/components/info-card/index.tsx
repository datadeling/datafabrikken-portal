import React, { FC, memo } from 'react';
import { compose } from 'redux';
import ExternalLink from '../link-external';
import SC from './styled';
import env from '../../env';
import { CourseType } from '../../types/enums';
import RoundedTag, { Variant } from '../rounded-tag';
import Translation from '../translation';
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
    numberOfModules
  },
  provider,
  translationsService
}) => {
  const courseType = (() => {
    switch (type) {
      case CourseType.INTRO_COURSE:
        return translationsService.translate('infoCard.introCourse');
      case CourseType.ADVANCED_TRAINING:
        return translationsService.translate('infoCard.advancedTraining');
      case CourseType.CONTINUING_EDUCATION:
        return translationsService.translate('infoCard.continuingEducation');
      default:
        return null;
    }
  })();

  const handleOnClick = () => window.open(link, '_blank');

  return (
    <SC.Card onClick={handleOnClick}>
      {featureImage?.url && (
        <SC.Image src={`${STRAPI_API_HOST}${featureImage.url}`} />
      )}
      <SC.CourseContent>
        <SC.Tags>
          {type && (
            <RoundedTag as='div'>
              <span>{courseType}</span>
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
          <ExternalLink href={link} openInNewTab>
            {title}
          </ExternalLink>
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
              )}`}
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
          {`${translationsService.translate('infoCard.courseIsProvidedBy')} ${
            provider.title
          }`}
        </SC.CourseProvider>
      )}
    </SC.Card>
  );
};

export default compose<FC<ExternalProps>>(memo, withTranslations)(InfoCard);
