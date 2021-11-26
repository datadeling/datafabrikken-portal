import React, { memo, FC, useLayoutEffect, Fragment } from 'react';
import { compose } from 'redux';

import { RouteComponentProps } from 'react-router-dom';

import ExpansionPanel, {
  ExpansionPanelBody,
  ExpansionPanelHead
} from '@fellesdatakatalog/expansion-panel';
import withAssessment, {
  Props as AssessmentProps
} from '../../../../../components/with-assessment';
import withOrganization, {
  Props as OrganizationProps
} from '../../../../../components/with-organization';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import ErrorPage from '../../../../../components/error-page';

import Translation from '../../../../../components/translation';
import translations from '../../../../../services/translations';

import SC from './styled';

import { DimensionType, IndicatorType } from '../../../../../types/enums';
import {
  calculateRatingPercentage,
  determineRatingIcon
} from '../../../../../components/details-page/components/metadata-quality';
import { PATHNAME } from '../../../../../enums';
import InternalLink from '../../../../../components/link-internal';
import ExternalLink from '../../../../../components/link-external';
import Root from '../../../../../components/root';

interface RouteParams {
  organizationId: string;
  datasetId: string;
}

interface Props
  extends AssessmentProps,
    OrganizationProps,
    RouteComponentProps<RouteParams> {}

const DatasetPage: FC<Props> = ({
  organization,
  assessment,
  assessmentActions: { getAssessmentRequested: getAssessment },
  organizationActions: { getOrganizationRequested: getOrganization },
  match: {
    params: { organizationId, datasetId }
  }
}) => {
  useLayoutEffect(() => {
    if (organization?.organizationId !== organizationId) {
      getOrganization(organizationId);
    }

    if (assessment?.id !== datasetId) {
      getAssessment(datasetId);
    }
  }, []);

  const determineDimensionTranslation = (dimensionType: DimensionType) => {
    switch (dimensionType) {
      case DimensionType.ACCESSIBILITY:
        return <Translation id='metadataQualityPage.criteria.accessibility' />;
      case DimensionType.FINDABILITY:
        return <Translation id='metadataQualityPage.criteria.findability' />;
      case DimensionType.INTEROPERABILITY:
        return (
          <Translation id='metadataQualityPage.criteria.interoperability' />
        );
      case DimensionType.READABILITY:
        return <Translation id='metadataQualityPage.criteria.readability' />;
      case DimensionType.REUSABILITY:
        return <Translation id='metadataQualityPage.criteria.reusability' />;
      default:
        return null;
    }
  };

  const determineIndicatorTranslation = (indicatorType: IndicatorType) => {
    switch (indicatorType) {
      case IndicatorType.DISTRIBUTABLE_DATA:
        return (
          <Translation id='metadataQualityPage.indicator.distributableData' />
        );
      case IndicatorType.KEYWORD_USAGE:
        return <Translation id='metadataQualityPage.indicator.keywordUsage' />;
      case IndicatorType.SUBJECT_USAGE:
        return <Translation id='metadataQualityPage.indicator.subjectUsage' />;
      case IndicatorType.GEO_SEARCH:
        return <Translation id='metadataQualityPage.indicator.geoSearch' />;
      case IndicatorType.CONTROLLED_VOCABULARY_USAGE:
        return (
          <Translation id='metadataQualityPage.indicator.controlledVocabularyUsage' />
        );

      case IndicatorType.LICENSE_INFORMATION:
        return (
          <Translation id='metadataQualityPage.indicator.licenseInformation' />
        );
      case IndicatorType.CONTACT_POINT:
        return <Translation id='metadataQualityPage.indicator.contactPoint' />;
      case IndicatorType.TITLE:
        return <Translation id='metadataQualityPage.indicator.title' />;
      case IndicatorType.TITLE_NO_ORG_NAME:
        return (
          <Translation id='metadataQualityPage.indicator.titleNoOrgName' />
        );
      case IndicatorType.DESCRIPTION:
        return <Translation id='metadataQualityPage.indicator.description' />;
      case IndicatorType.DESCRIPTION_WITHOUT_TITLE:
        return (
          <Translation id='metadataQualityPage.indicator.descriptionWithoutTitle' />
        );
      default:
        return null;
    }
  };

  const determineIndicatorDescriptionTranslation = (
    indicatorType: IndicatorType
  ) => {
    switch (indicatorType) {
      case IndicatorType.DISTRIBUTABLE_DATA:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.distributableData' />
        );
      case IndicatorType.KEYWORD_USAGE:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.keywordUsage' />
        );
      case IndicatorType.SUBJECT_USAGE:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.subjectUsage' />
        );
      case IndicatorType.GEO_SEARCH:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.geoSearch' />
        );
      case IndicatorType.CONTROLLED_VOCABULARY_USAGE:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.controlledVocabularyUsage' />
        );
      case IndicatorType.LICENSE_INFORMATION:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.licenseInformation' />
        );
      case IndicatorType.CONTACT_POINT:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.contactPoint' />
        );
      case IndicatorType.TITLE:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.title' />
        );
      case IndicatorType.TITLE_NO_ORG_NAME:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.titleNoOrgName' />
        );
      case IndicatorType.DESCRIPTION:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.description' />
        );
      case IndicatorType.DESCRIPTION_WITHOUT_TITLE:
        return (
          <Translation id='metadataQualityPage.indicatorDescription.descriptionWithoutTitle' />
        );
      default:
        return null;
    }
  };

  return organization && assessment ? (
    <Root>
      <SC.Container>
        <SC.Banner>
          <SC.Title>
            <h1>
              <Translation id='metadataQualityPage.organizationDatasetPageSubtitle' />{' '}
              <Translation text={assessment?.entity?.title} />
            </h1>
          </SC.Title>
          <SC.SubTitle>
            <InternalLink
              to={`${PATHNAME.FIND_DATA}${PATHNAME.DATASET_DETAILS}/${datasetId}`}
            >
              <Translation id='metadataQualityPage.goToDataset' />
            </InternalLink>
            <SC.BannerRating>
              {determineRatingIcon(assessment?.rating)}
              <p>{calculateRatingPercentage(assessment?.rating)}%</p>
            </SC.BannerRating>
          </SC.SubTitle>
        </SC.Banner>
      </SC.Container>
      <SC.Content>
        <SC.Container>
          <SC.Section>
            <SC.Table>
              <SC.TableHead>
                <tr>
                  <th>
                    <p>
                      <Translation id='metadataQualityPage.criterion' />
                    </p>
                    <p>
                      <Translation id='metadataQualityPage.metadataQuality' />
                    </p>
                  </th>
                </tr>
              </SC.TableHead>
              <SC.TableBody>
                {assessment?.dimensions?.map(({ type, rating, indicators }) => (
                  <Fragment key={type}>
                    <tr className='section-row'>
                      <td>
                        <div>
                          <SC.DimensionContainer>
                            <p>{determineDimensionTranslation(type)}</p>
                            <div
                              data-tip={translations.translate(
                                `metadataQualityPage.tooltipText.${type}`
                              )}
                              data-for={`${type}_tooltip`}
                            />
                          </SC.DimensionContainer>
                          <SC.QualityIconContainer>
                            {determineRatingIcon(rating)}
                            <span>{calculateRatingPercentage(rating)}%</span>
                          </SC.QualityIconContainer>
                        </div>
                      </td>
                    </tr>
                    {indicators.map(
                      ({ type: indicatorType, conforms, weight }) => (
                        <tr key={indicatorType}>
                          <ExpansionPanel as='td'>
                            <ExpansionPanelHead>
                              <span>
                                {conforms ? <SC.CheckIcon /> : <SC.CrossIcon />}
                              </span>
                              <p>
                                {determineIndicatorTranslation(indicatorType)}
                              </p>
                            </ExpansionPanelHead>
                            <ExpansionPanelBody>
                              <p>
                                {determineIndicatorDescriptionTranslation(
                                  indicatorType
                                )}
                              </p>
                              <span>
                                <Translation
                                  id='translations.metadataQualityPage.indicatorWeight'
                                  values={{ weight }}
                                />
                              </span>
                            </ExpansionPanelBody>
                          </ExpansionPanel>
                        </tr>
                      )
                    )}
                  </Fragment>
                ))}
              </SC.TableBody>
            </SC.Table>
          </SC.Section>
          <SC.Section>
            <SC.FrequentlyAskedQuestions>
              <SC.Question>
                <h3>
                  <Translation id='metadataQualityPage.whatIsMetadataQualityFaqTitle' />
                </h3>
                <p>
                  <Translation id='metadataQualityPage.whatIsMetadataQualityFaqDescription' />
                </p>
                <ExternalLink href='https://data.norge.no/guidance/metadata'>
                  <Translation id='metadataQualityPage.whatIsMetadataQualityFaqLink' />
                </ExternalLink>
              </SC.Question>
            </SC.FrequentlyAskedQuestions>
          </SC.Section>
        </SC.Container>
      </SC.Content>
    </Root>
  ) : (
    <ErrorPage errorCode='404' />
  );
};

export default compose<FC>(
  memo,
  withAssessment,
  withOrganization,
  withErrorBoundary(ErrorPage)
)(DatasetPage);
