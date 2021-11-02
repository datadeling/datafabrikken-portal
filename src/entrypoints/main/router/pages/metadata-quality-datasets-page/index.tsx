import React, { memo, FC, useState, useLayoutEffect } from 'react';
import { compose } from 'redux';
import type { RouteComponentProps } from 'react-router-dom';

import withAssessment, {
  Props as AssessmentProps
} from '../../../../../components/with-assessment';
import withAssessments, {
  Props as AssessmentsProps
} from '../../../../../components/with-assessments';
import withOrganization, {
  Props as OrganizationProps
} from '../../../../../components/with-organization';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import ErrorPage from '../../../../../components/error-page';

import ExpandIcon from '../../../../../images/icon-expand-md.inline.svg';

import SC from './styled';

import { DimensionType } from '../../../../../types/enums';
import Root from '../../../../../components/root';
import ExternalLink from '../../../../../components/link-external';
import Translation from '../../../../../components/translation';
import translations from '../../../../../services/translations';
import {
  calculateRatingPercentage,
  determineRatingIcon
} from '../../../../../components/details-page/components/metadata-quality';

interface RouteParams {
  organizationId: string;
}

interface Props
  extends AssessmentProps,
    AssessmentsProps,
    OrganizationProps,
    RouteComponentProps<RouteParams> {}

const DatasetsPage: FC<Props> = ({
  organization,
  assessments,
  catalogRating,
  totalAssessments,
  assessmentsPage,
  assessmentPageSize,
  hasMoreAssessments,
  assessmentActions: { getCatalogRatingRequested: getCatalogRating },
  assessmentsActions: {
    getPagedAssessmentsRequested: getAssessments,
    loadMoreAssessmentsRequested: loadMoreAssessments
  },
  organizationActions: { getOrganizationRequested: getOrganization },
  history: { push },
  match: {
    url,
    params: { organizationId }
  }
}) => {
  const [assessmentsRequested, setAssessmentsRequested] = useState(false);

  const loadMoreDatasets = () =>
    loadMoreAssessments(organizationId, 'dataset', 'FDK', assessmentsPage + 1);

  useLayoutEffect(() => {
    if (organization?.organizationId !== organizationId) {
      getOrganization(organizationId);
    }
  }, []);

  useLayoutEffect(() => {
    if (!assessmentsRequested) {
      getAssessments(organizationId, 'dataset', 'FDK', 0);

      getCatalogRating(organizationId, 'dataset', 'FDK');

      setAssessmentsRequested(true);
    }
  });

  return (
    <Root>
      <SC.Banner>
        <SC.Container>
          <SC.Title>
            <Translation
              id='metadataQualityPage.organizationDatasetCatalogPageTitle'
              values={{
                organizationName:
                  translations.getTranslateText(organization?.prefLabel) ??
                  organization?.name ??
                  ''
              }}
            />
          </SC.Title>
          <SC.Subtitle>
            <Translation id='metadataQualityPage.organizationDatasetCatalogPageSubtitle' />
          </SC.Subtitle>
        </SC.Container>
      </SC.Banner>

      <SC.Content>
        <SC.Container>
          <SC.Section>
            <SC.Table>
              <SC.TableHead>
                <tr>
                  <th
                    title={
                      translations.translate(
                        'metadataQualityPage.datasetTitle'
                      ) as string
                    }
                  >
                    <Translation id='metadataQualityPage.datasetTitle' />
                  </th>
                  <th
                    title={
                      translations.translate(
                        'metadataQualityPage.metadataQuality'
                      ) as string
                    }
                  >
                    <Translation id='metadataQualityPage.metadataQuality' />
                  </th>
                  <th
                    title={
                      translations.translate(
                        'metadataQualityPage.criteria.accessibility'
                      ) as string
                    }
                  >
                    <Translation id='metadataQualityPage.criteria.accessibility' />
                  </th>
                  <th
                    title={
                      translations.translate(
                        'metadataQualityPage.criteria.findability'
                      ) as string
                    }
                  >
                    <Translation id='metadataQualityPage.criteria.findability' />
                  </th>
                  <th
                    title={
                      translations.translate(
                        'metadataQualityPage.criteria.interoperability'
                      ) as string
                    }
                  >
                    <Translation id='metadataQualityPage.criteria.interoperability' />
                  </th>
                  <th
                    title={
                      translations.translate(
                        'metadataQualityPage.criteria.readability'
                      ) as string
                    }
                  >
                    <Translation id='metadataQualityPage.criteria.readability' />
                  </th>
                  <th>
                    <Translation id='metadataQualityPage.criteria.reusability' />
                  </th>
                </tr>
              </SC.TableHead>
              <SC.TableBody>
                {assessments.map(assessment => (
                  <tr
                    key={assessment.id}
                    onClick={() => push(`${url}/${assessment.id}`)}
                  >
                    <td>
                      {translations.getTranslateText(assessment.entity?.title)}
                    </td>
                    <td>
                      <SC.MetadataCellContents>
                        {determineRatingIcon(assessment?.rating)}
                        <span>
                          {calculateRatingPercentage(assessment?.rating)}%
                        </span>
                      </SC.MetadataCellContents>
                    </td>
                    <td>
                      {calculateRatingPercentage(
                        assessment?.dimensions?.find(
                          ({ type }) => type === DimensionType.ACCESSIBILITY
                        )?.rating
                      )}
                      %
                    </td>
                    <td>
                      {calculateRatingPercentage(
                        assessment?.dimensions?.find(
                          ({ type }) => type === DimensionType.FINDABILITY
                        )?.rating
                      )}
                      %
                    </td>
                    <td>
                      {calculateRatingPercentage(
                        assessment?.dimensions?.find(
                          ({ type }) => type === DimensionType.INTEROPERABILITY
                        )?.rating
                      )}
                      %
                    </td>
                    <td>
                      {calculateRatingPercentage(
                        assessment?.dimensions?.find(
                          ({ type }) => type === DimensionType.READABILITY
                        )?.rating
                      )}
                      %
                    </td>
                    <td>
                      {calculateRatingPercentage(
                        assessment?.dimensions?.find(
                          ({ type }) => type === DimensionType.REUSABILITY
                        )?.rating
                      )}
                      %
                    </td>
                  </tr>
                ))}
              </SC.TableBody>
            </SC.Table>
            {hasMoreAssessments && (
              <SC.LoadMoreButton onClick={loadMoreDatasets}>
                <ExpandIcon />
                <span>
                  <Translation
                    id='metadataQualityPage.loadMoreDatasets'
                    values={{
                      count:
                        totalAssessments -
                        (assessmentsPage + 1) * assessmentPageSize
                    }}
                  />
                </span>
              </SC.LoadMoreButton>
            )}
            <SC.RatingSummary>
              <div>
                <Translation id='metadataQualityPage.averageRatingForOrganization' />
              </div>
              <SC.MetadataCellContents>
                {determineRatingIcon(catalogRating)}
                <span>{calculateRatingPercentage(catalogRating)}%</span>
              </SC.MetadataCellContents>
              {[
                DimensionType.ACCESSIBILITY,
                DimensionType.FINDABILITY,
                DimensionType.INTEROPERABILITY,
                DimensionType.READABILITY,
                DimensionType.REUSABILITY
              ].map(dimension => (
                <div key={dimension}>
                  {`${calculateRatingPercentage(
                    catalogRating?.dimensionsRating?.[dimension]
                  )}%`}
                </div>
              ))}
            </SC.RatingSummary>
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
  );
};

export default compose<FC>(
  memo,
  withAssessment,
  withAssessments,
  withOrganization,
  withErrorBoundary(ErrorPage)
)(DatasetsPage);
