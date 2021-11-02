import React, { FC, memo, useState, useLayoutEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import SC from './styled';
import {
  StatisticsRegular,
  StatisticsRegularLink
} from '../../../../../components/statistics-regular';

import Translation from '../../../../../components/translation';
import translations from '../../../../../services/translations';
import ExternalLink from '../../../../../components/link-external';
import {
  determineRatingIcon,
  determineRatingTranslation
} from '../../../../../components/details-page/components/metadata-quality';
import withOrganization, {
  Props as OrganizationProps
} from '../../../../../components/with-organization';
import ErrorPage from '../../../../../components/error-page';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import Root from '../../../../../components/root';
import KeyValueList from '../../../../../components/key-value-list';
import KeyValueListItem from '../../../../../components/key-value-list-item';
import {
  patchMultipleSearchQuery,
  patchSearchQuery
} from '../../../../../utils/location-helper';
import { PATHNAME } from '../../../../../enums';
import { Filter } from '../../../../../types/enums';

interface RouteParams {
  organizationId: string;
}

interface Props extends OrganizationProps, RouteComponentProps<RouteParams> {}

const OrganizationPage: FC<Props> = ({
  organization,
  isLoadingOrganization,
  rating,
  organizationActions: {
    getOrganizationRequested: getOrganization,
    getOrganizationRatingRequested: getRating,
    resetOrganization
  },
  match: {
    params: { organizationId }
  }
}) => {
  const [showOrganizationLogo, setShowOrganizationLogo] = useState(true);

  useLayoutEffect(() => {
    if (organization?.organizationId !== organizationId) {
      getOrganization(organizationId);
    }

    if (rating?.organization?.organizationId !== organizationId) {
      getRating(organizationId);
    }

    return () => {
      resetOrganization();
    };
  }, []);

  return (
    <Root>
      {organization || isLoadingOrganization ? (
        <>
          {(organization?.prefLabel || organization?.name) && (
            <SC.Banner>
              <SC.Title>
                <Translation
                  id='metadataQualityPage.organizationPageTitle'
                  values={{
                    organizationName:
                      translations.getTranslateText(organization?.prefLabel) ??
                      organization?.name ??
                      ''
                  }}
                />
              </SC.Title>
            </SC.Banner>
          )}
          <SC.Content>
            <SC.Container>
              <SC.Section>
                {organization && rating?.organization && (
                  <SC.OrganizationInformation>
                    {showOrganizationLogo && organization.organizationId && (
                      <img
                        src={`https://orglogo.difi.no/api/logo/org/${organization.organizationId}`}
                        alt={`${organization.name} logo`}
                        onError={() => setShowOrganizationLogo(false)}
                      />
                    )}
                    <KeyValueList $highlighted>
                      <KeyValueListItem
                        property={translations.translate(
                          'metadataQualityPage.organisationName'
                        )}
                        value={organization.name}
                      />
                      <KeyValueListItem
                        property={translations.translate(
                          'metadataQualityPage.organisationNumber'
                        )}
                        value={organization.organizationId.replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ' '
                        )}
                      />
                      <KeyValueListItem
                        property={translations.translate(
                          'metadataQualityPage.organisationForm'
                        )}
                        value={rating.organization.orgType}
                      />
                      {rating.organization.industryCode && (
                        <KeyValueListItem
                          property={translations.translate(
                            'metadataQualityPage.organisationBusinessCodes'
                          )}
                          value={rating.organization.industryCode}
                        />
                      )}
                      {rating.organization.sectorCode && (
                        <KeyValueListItem
                          property={translations.translate(
                            'metadataQualityPage.organisationInstitutionalSectorCode'
                          )}
                          value={rating.organization.sectorCode}
                        />
                      )}
                      {rating.organization.homepage && (
                        <KeyValueListItem
                          property={translations.translate(
                            'metadataQualityPage.organisationHomePage'
                          )}
                          value={
                            <ExternalLink
                              href={`//${rating.organization.homepage.replace(
                                /\/$/,
                                ''
                              )}`}
                            >
                              {rating.organization.homepage.replace(/\/$/, '')}
                            </ExternalLink>
                          }
                        />
                      )}

                      <KeyValueListItem
                        property={translations.translate(
                          'metadataQualityPage.organisationMoreInfo'
                        )}
                        value={
                          <ExternalLink
                            href={`https://data.brreg.no/enhetsregisteret/oppslag/enheter/${organization.organizationId}`}
                          >
                            <Translation
                              id='metadataQualityPage.organisationInEnhetsregisteret'
                              values={{
                                organizationName: organization.name ?? ''
                              }}
                            />
                          </ExternalLink>
                        }
                      />
                    </KeyValueList>
                  </SC.OrganizationInformation>
                )}
              </SC.Section>
              <SC.Section />
              {rating && (
                <SC.Section>
                  <SC.CataloguesStatistics>
                    {organization?.organizationId ? (
                      <StatisticsRegularLink
                        to={
                          organization?.organizationId
                            ? `${PATHNAME.FIND_DATA}${
                                PATHNAME.DATASETS
                              }${patchSearchQuery(
                                Filter.ORGANIZATION_NUMBER,
                                organization.organizationId
                              )}`
                            : ''
                        }
                        icon={<SC.DatasetIcon />}
                        count={rating.datasets?.totalCount ?? 0}
                        description={
                          translations.translate(
                            'metadataQualityPage.descriptionsTotal'
                          ) as string
                        }
                      />
                    ) : (
                      <StatisticsRegular
                        icon={<SC.DatasetIcon />}
                        count={rating.datasets?.totalCount ?? 0}
                        description={
                          translations.translate(
                            'metadataQualityPage.descriptionsTotal'
                          ) as string
                        }
                      />
                    )}

                    <StatisticsRegularLink
                      to={`${PATHNAME.FIND_DATA}${
                        PATHNAME.DATASETS
                      }${patchMultipleSearchQuery({
                        [Filter.ORGPATH]: organization?.orgPath,
                        [Filter.LASTXDAYS]: '7'
                      })}`}
                      icon={<SC.NewIcon />}
                      count={rating.datasets?.newCount ?? 0}
                      description={
                        translations.translate(
                          'metadataQualityPage.newDescriptions',
                          {
                            term: translations.translate(
                              'metadataQualityPage.lastWeek'
                            ) as string
                          }
                        ) as string
                      }
                    />
                    <StatisticsRegularLink
                      to={`${PATHNAME.FIND_DATA}${
                        PATHNAME.DATASETS
                      }${patchMultipleSearchQuery({
                        [Filter.ORGPATH]: organization?.orgPath,
                        [Filter.PROVENANCE]: 'NASJONAL'
                      })}`}
                      icon={<SC.AuthoritativeIcon />}
                      count={rating.datasets?.authoritativeCount ?? 0}
                      description={
                        translations.translate(
                          'metadataQualityPage.datasetIs',
                          {
                            term: translations.translate(
                              'metadataQualityPage.authoritativeSources'
                            ) as string
                          }
                        ) as string
                      }
                    />
                    <StatisticsRegularLink
                      to={`${PATHNAME.FIND_DATA}${
                        PATHNAME.DATASETS
                      }${patchMultipleSearchQuery({
                        [Filter.ORGPATH]: organization?.orgPath,
                        [Filter.OPENDATA]: 'true'
                      })}`}
                      icon={<SC.AccessOpenIcon />}
                      count={rating.datasets?.openCount ?? 0}
                      description={
                        translations.translate(
                          'metadataQualityPage.datasetIs',
                          {
                            term: translations.translate(
                              'metadataQualityPage.open'
                            ) as string
                          }
                        ) as string
                      }
                    />

                    <StatisticsRegular
                      icon={determineRatingIcon(rating.datasets?.quality)}
                      count={`${rating.datasets?.quality?.percentage || 0} %`}
                      description={determineRatingTranslation(
                        rating.datasets?.quality
                      )}
                    />
                  </SC.CataloguesStatistics>
                </SC.Section>
              )}
            </SC.Container>
          </SC.Content>
        </>
      ) : (
        <ErrorPage errorCode='404' />
      )}
    </Root>
  );
};

export default compose<FC>(
  memo,
  withOrganization,
  withErrorBoundary(ErrorPage)
)(OrganizationPage);
