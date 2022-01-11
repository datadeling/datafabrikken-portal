import React, { FC, memo } from 'react';
import { compose } from 'redux';
import ExternalLink from '../../../../../../../components/link-external';
import SC from './styled';
import env from '../../../../../../../env';
import { CourseType, CourseProvider } from '../../../../../../../types/enums';
import RoundedTag, {
  Variant
} from '../../../../../../../components/rounded-tag';
import Translation from '../../../../../../../components/translation';
import {
  withTranslations,
  Props as TranslationsProps
} from '../../../../../../../providers/translations';

const { STRAPI_API_HOST } = env;

interface ExternalProps {
  course: any;
}

interface Props extends ExternalProps, TranslationsProps {}

const CourseCard: FC<Props> = ({
  course: {
    featureImage,
    free,
    type,
    link,
    title,
    description,
    durationInMinutes,
    numberOfModules,
    provider
  },
  translationsService
}) => {
  const providerInfo = (() => {
    switch (provider) {
      case CourseProvider.DIGITAL_NORWAY:
        return {
          logo: 'https://digitalnorway.com/content/uploads/2020/06/digital-norway-logo-positive.svg',
          subtitle: `${translationsService.translate(
            'coursesPage.courseIsProvidedBy'
          )} DigitalNorway`
        };
      default:
        return null;
    }
  })();

  const courseType = (() => {
    switch (type) {
      case CourseType.INTRO_COURSE:
        return translationsService.translate('coursesPage.introCourse');
      case CourseType.ADVANCED_TRAINING:
        return translationsService.translate('coursesPage.advancedTraining');
      case CourseType.CONTINUING_EDUCATION:
        return translationsService.translate('coursesPage.continuingEducation');
      default:
        return null;
    }
  })();

  const handleOnClick = () => window.open(link, '_blank');

  return (
    <SC.Card onClick={handleOnClick}>
      <SC.Image src={`${STRAPI_API_HOST}${featureImage?.url}`} />
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
                <Translation id='coursesPage.free' />
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
                'coursesPage.minuter'
              )}`}
            >
              <SC.ClockIcon />
              {durationInMinutes}
            </SC.Fact>
          )}
          {numberOfModules && (
            <SC.Fact
              title={`${numberOfModules} ${translationsService.translate(
                'coursesPage.moduler'
              )}`}
            >
              <SC.BoxIcon />
              {numberOfModules}
            </SC.Fact>
          )}
        </SC.CourseFacts>
      </SC.CourseContent>
      {providerInfo && (
        <>
          <SC.CourseProvider>
            <SC.ProviderLogo
              src={providerInfo.logo}
              alt={`${translationsService.translate(
                'coursesPage.providerLogo'
              )}`}
            />
            {providerInfo.subtitle}
          </SC.CourseProvider>
        </>
      )}
    </SC.Card>
  );
};

export default compose<FC<ExternalProps>>(memo, withTranslations)(CourseCard);
