import React, { memo, FC, useEffect, useState } from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import withDataset, {
  Props as DatasetProps
} from '../../../../../components/with-dataset';
import withReferenceData, {
  Props as ReferenceDataProps
} from '../../../../../components/with-reference-data';
import withDatasets, {
  Props as DatasetsProps
} from '../../../../../components/with-datasets';
import withPublicServices, {
  Props as PublicServicesProps
} from '../../../../../components/with-public-services';
import withDataServices, {
  Props as DataServicesProps
} from '../../../../../components/with-data-services';
import withCommunityTopicSearch, {
  Props as CommunityProps
} from '../../../../../components/with-community-search';

import DetailsPage from '../../../../../components/details-page';

import SC from './styled';

import { Entity } from '../../../../../types/enums';
import translations from '../../../../../services/translations';
import { dateStringToDate, formatDate } from '../../../../../utils/date';
import ContentSection from '../../../../../components/details-page/components/content-section';
import DatasetDistribution from './components/dataset-distribution';
import Markdown from '../../../../../components/markdown';
import ErrorPage from '../../../../../components/error-page';
import KeyValueList from '../../../../../components/key-value-list';
import KeyValueListItem from '../../../../../components/key-value-list-item';
import RelationList from '../../../../../components/relation-list';
import ExternalLink from '../../../../../components/link-external';
import InlineList from '../../../../../components/inline-list';
import { PATHNAME } from '../../../../../enums';
import InternalLink from '../../../../../components/link-internal';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import {
  AccessService,
  Distribution,
  ItemWithRelationType,
  MediaTypeOrExtent
} from '../../../../../types';
import CommentSection from '../../../../../components/community/comments';
import Topic from '../../../../../components/community/topic';
import Translation from '../../../../../components/translation';
import withConcepts, {
  Props as ConceptProps
} from '../../../../../components/with-concepts';
import env from '../../../../../env';

interface RouteParams {
  datasetId?: string;
}

interface Props
  extends DatasetProps,
    DatasetsProps,
    ReferenceDataProps,
    PublicServicesProps,
    DataServicesProps,
    CommunityProps,
    ConceptProps,
    RouteComponentProps<RouteParams> {}

const DatasetDetailsPage: FC<Props> = ({
  dataset,
  datasets,
  datasetsRelations,
  publicServicesRelations,
  dataServicesRelations,
  isLoadingDataset,
  topics,
  referenceData: { referencetypes: referenceTypes },
  concepts,
  conceptsActions: { getConceptsRequested: getConcepts, resetConcepts },
  datasetActions: { getDatasetRequested: getDataset, resetDataset },
  datasetsActions: {
    getPagedDatasetsRequested: getDatasets,
    resetPagedDatasets,
    getDatasetsRelationsRequested: getDatasetsRelations,
    resetDatasetsRelations
  },
  referenceDataActions: { getReferenceDataRequested: getReferenceData },
  dataServices,
  dataServicesActions: {
    getDataServicesRequested: getDataServices,
    resetDataServices,
    getDataServicesRelationsRequested: getDataServicesRelations,
    resetDataServicesRelations
  },
  publicServicesActions: {
    getPublicServicesRelationsRequested: getPublicServicesRelations,
    resetPublicServicesRelations
  },
  communityActions: { searchTopicsRequested: searchCommunity, resetTopics },
  match: {
    params: { datasetId }
  }
}) => {
  const entity = Entity.DATASET;

  const [isMounted, setIsMounted] = useState(false);

  const renderPage = isLoadingDataset || !isMounted || dataset !== null;

  const isAuthoritative = dataset?.provenance?.code === 'NASJONAL';
  const isOpenData =
    dataset?.accessRights?.code === 'PUBLIC' &&
    dataset?.distribution?.some(({ openLicense }) => openLicense);
  const isPublicData = dataset?.accessRights?.code === 'PUBLIC' && !isOpenData;
  const isRestrictedData = dataset?.accessRights?.code === 'RESTRICTED';
  const isNonPublicData = dataset?.accessRights?.code === 'NON_PUBLIC';

  const title = dataset?.title ?? {};
  const description = translations.getTranslateText(
    dataset?.descriptionFormatted ?? dataset?.description ?? ''
  );

  const lastPublished = formatDate(
    dateStringToDate(dataset?.harvest?.firstHarvested)
  );
  const objective = translations.getTranslateText(dataset?.objective ?? '');
  const distributions = dataset?.distribution ?? [];
  const usage = {
    legalBasisForRestriction: dataset?.legalBasisForRestriction ?? [],
    legalBasisForProcessing: dataset?.legalBasisForProcessing ?? [],
    legalBasisForAccess: dataset?.legalBasisForAccess ?? [],
    type: dataset?.type,
    standards: dataset?.conformsTo ?? [],
    informationModelReferences: dataset?.informationModel ?? [],
    languages: dataset?.language ?? [],
    moreInformationPage: dataset?.landingPage?.[0]
  };
  const samples =
    dataset?.sample?.filter(
      ({
        description: sampleDescription,
        format: formats,
        accessURL: accessURLs
      }) =>
        translations.getTranslateText(sampleDescription) ||
        Array.isArray(formats) ||
        Array.isArray(accessURLs)
    ) ?? [];
  const provenance = {
    provenance: translations.getTranslateText(dataset?.provenance?.prefLabel),
    frequency: translations.getTranslateText(
      dataset?.accrualPeriodicity?.prefLabel
    ),
    issued: formatDate(dateStringToDate(dataset?.issued)),
    modified: formatDate(dateStringToDate(dataset?.modified))
  };
  const quality = {
    relevance: dataset?.hasRelevanceAnnotation?.hasBody,
    completeness: dataset?.hasCompletenessAnnotation?.hasBody,
    accuracy: dataset?.hasAccuracyAnnotation?.hasBody,
    availability: dataset?.hasAvailabilityAnnotation?.hasBody,
    currentness: dataset?.hasCurrentnessAnnotation?.hasBody
  };

  const keywords =
    dataset?.keyword
      ?.map(keyword =>
        translations.getTranslateTextWithLanguageCode(
          keyword,
          translations.getLanguage()
        )
      )
      ?.filter(Boolean) ?? [];
  const qualifiedAttributions = dataset?.qualifiedAttributions ?? [];
  const temporalRestrictions = dataset?.temporal ?? [];
  const contactPoints = dataset?.contactPoint ?? [];

  const themes = [...(dataset?.losTheme ?? []), ...(dataset?.theme ?? [])];

  const referencedDatasets = datasets;
  const datasetReferenceTypes = dataset?.references ?? [];

  const referencedResourcesUnResolved =
    dataset?.references?.filter(
      ({ source }) =>
        !referencedDatasets.some(
          ({ uri: referencedDatasetsUri }) =>
            referencedDatasetsUri === source?.uri
        )
    ) ?? [];

  const mapAccessServices = (distribution: Distribution) => {
    const accessServices: AccessService[] = [];
    distribution?.accessService?.forEach(({ uri }) => {
      if (uri) {
        const dataService = dataServices.find(ds => ds.uri === uri);
        dataService
          ? accessServices.push({
              description: dataService.title,
              endpointDescription:
                dataService.endpointDescription?.map(desc => ({ uri: desc })) ??
                [],
              uri: `${env.FDK_PORTAL_HOST}${PATHNAME.FDK_DATA_SERVICES}/${dataService.id}`
            })
          : accessServices.push({
              description: { nb: uri },
              uri,
              endpointDescription: []
            });
      }
    });

    return accessServices;
  };

  useEffect(() => {
    if (datasetId) {
      getDataset(datasetId);
      setIsMounted(true);
      searchCommunity(datasetId);
    }

    if (!referenceTypes) {
      getReferenceData('referencetypes');
    }

    return () => {
      resetDataset();
      resetPagedDatasets();
      resetDatasetsRelations();
      resetDataServicesRelations();
      resetPublicServicesRelations();
      resetTopics();
      resetConcepts();
      resetDataServices();
    };
  }, [datasetId, getDataset]);

  useEffect(() => {
    if (isMounted) {
      const datasetUris =
        dataset?.references?.reduce(
          (accumulator, { source }) =>
            source?.uri ? [...accumulator, source.uri] : accumulator,
          [] as string[]
        ) ?? [];
      if (datasetUris && datasetUris.length > 0) {
        getDatasets({ uris: datasetUris });
      }

      const conceptIdentifiers =
        dataset?.subject?.map(({ identifier }) => identifier).filter(Boolean) ??
        [];
      if (conceptIdentifiers.length > 0) {
        getConcepts({
          identifiers: conceptIdentifiers as string[],
          size: 1000
        });
      }

      const accessUris =
        dataset?.distribution
          ?.flatMap(({ accessService }) => accessService?.map(({ uri }) => uri))
          ?.filter((accessUri): accessUri is string => !!accessUri) ?? [];
      if (accessUris.length > 0) {
        getDataServices({ uris: accessUris });
      }

      if (dataset?.uri) {
        getDatasetsRelations({ referencesSource: dataset.uri });
        getDataServicesRelations({ dataseturi: dataset.uri });
        getPublicServicesRelations({ isDescribedAt: dataset.uri });
      }
    }
  }, [dataset?.id, isMounted]);

  const publicServicesRelatedByWithRelationType: ItemWithRelationType[] =
    publicServicesRelations.map(relation => ({
      relation,
      relationType: translations.translate('sampleData') as string
    }));

  return renderPage ? (
    <DetailsPage
      entity={entity}
      entityId={dataset?.id}
      title={title}
      publisher={dataset?.publisher}
      lastPublished={lastPublished}
      isAuthoritative={isAuthoritative}
      isOpenData={isOpenData}
      isPublicData={isPublicData}
      isRestrictedData={isRestrictedData}
      isNonPublicData={isNonPublicData}
      themes={themes}
    >
      {description && (
        <ContentSection
          id='description'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.description'
          )}
          truncate
        >
          <Markdown>{description}</Markdown>
        </ContentSection>
      )}
      {objective && (
        <ContentSection
          id='objective'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.objective'
          )}
        >
          <Markdown>{objective}</Markdown>
        </ContentSection>
      )}
      {distributions.length > 0 && (
        <ContentSection
          id='distributions'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.distributions'
          )}
        >
          {dataServicesRelations.map(
            (
              {
                id,
                title: dataserviceTitle,
                uri,
                type,
                description: dataserviceDescription,
                isOpenLicense,
                fdkFormat,
                endpointURL,
                endpointDescription,
                conformsTo
              },
              index
            ) => (
              <DatasetDistribution
                key={`${uri || 'distribution-data-service'}-${index}`}
                datasetTitle={title}
                distribution={{
                  title: dataserviceTitle,
                  type,
                  conformsTo,
                  fdkFormat:
                    (fdkFormat?.filter(
                      format => format?.code
                    ) as MediaTypeOrExtent[]) ?? [],
                  description: dataserviceDescription,
                  openLicense: isOpenLicense,
                  accessURL: endpointURL
                }}
                accessServices={[
                  {
                    uri: `${env.FDK_PORTAL_HOST}${PATHNAME.FDK_DATA_SERVICES}/${id}`,
                    description: dataserviceTitle,
                    endpointDescription: []
                  }
                ]}
                endpointDescriptions={endpointDescription}
              />
            )
          )}

          {distributions.map((distribution, index) => (
            <DatasetDistribution
              key={`${distribution.uri || 'distribution'}-${index}`}
              datasetTitle={title}
              distribution={distribution}
              accessServices={mapAccessServices(distribution)}
            />
          ))}
        </ContentSection>
      )}
      {samples.length > 0 && (
        <ContentSection
          id='sample'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.sample'
          )}
        >
          {samples.map(
            (
              {
                description: sampleDescription,
                format: formats,
                accessURL: accessURLs
              },
              index
            ) => (
              <KeyValueList key={`sample-${index}`} $highlighted>
                <KeyValueListItem
                  property={translations.translate(
                    'dataset.distribution.description'
                  )}
                  value={translations.getTranslateText(sampleDescription)}
                />
                {formats?.join(', ') && (
                  <KeyValueListItem
                    property={translations.translate(
                      'dataset.distribution.format'
                    )}
                    value={formats.join(', ')}
                  />
                )}
                {Array.isArray(accessURLs) && (
                  <KeyValueListItem
                    property={translations.translate(
                      'dataset.distribution.accessUrl'
                    )}
                    value={
                      <ExternalLink href={accessURLs?.[0]} openInNewTab>
                        {translations.getTranslateText(accessURLs?.[0])}
                      </ExternalLink>
                    }
                  />
                )}
              </KeyValueList>
            )
          )}
        </ContentSection>
      )}
      {Object.values(usage)
        .filter(Boolean)
        .filter(item => item && item?.length > 0).length > 0 && (
        <ContentSection
          id='usage'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.usage'
          )}
        >
          <KeyValueList>
            {usage.legalBasisForRestriction.length > 0 && (
              <KeyValueListItem
                property={translations.translate(
                  'dataset.legalBasisForRestriction'
                )}
                value={
                  <SC.ExternalLinkList>
                    {usage.legalBasisForRestriction.map(
                      ({ uri, prefLabel }, index) =>
                        uri &&
                        prefLabel && (
                          <ExternalLink
                            key={`${uri}-${index}`}
                            href={uri}
                            openInNewTab
                          >
                            {translations.getTranslateText(prefLabel)}
                          </ExternalLink>
                        )
                    )}
                  </SC.ExternalLinkList>
                }
              />
            )}
            {usage.legalBasisForProcessing.length > 0 && (
              <KeyValueListItem
                property={translations.translate(
                  'dataset.legalBasisForProcessing'
                )}
                value={
                  <SC.ExternalLinkList>
                    {usage.legalBasisForProcessing.map(
                      ({ uri, prefLabel }, index) =>
                        uri &&
                        prefLabel && (
                          <ExternalLink
                            key={`${uri}-${index}`}
                            href={uri}
                            openInNewTab
                          >
                            {translations.getTranslateText(prefLabel)}
                          </ExternalLink>
                        )
                    )}
                  </SC.ExternalLinkList>
                }
              />
            )}
            {usage.legalBasisForAccess.length > 0 && (
              <KeyValueListItem
                property={translations.translate('dataset.legalBasisForAccess')}
                value={
                  <SC.ExternalLinkList>
                    {usage.legalBasisForAccess.map(
                      ({ uri, prefLabel }, index) =>
                        uri &&
                        prefLabel && (
                          <ExternalLink
                            key={`${uri}-${index}`}
                            href={uri}
                            openInNewTab
                          >
                            {translations.getTranslateText(prefLabel)}
                          </ExternalLink>
                        )
                    )}
                  </SC.ExternalLinkList>
                }
              />
            )}
            {usage.type && (
              <KeyValueListItem
                property={translations.translate('dataset.type')}
                value={usage.type}
              />
            )}
            {usage.standards.length > 0 && (
              <KeyValueListItem
                property={translations.translate('dataset.conformsTo')}
                value={
                  <SC.ExternalLinkList>
                    {usage.standards.map(
                      ({ uri, prefLabel }, index) =>
                        uri &&
                        prefLabel && (
                          <ExternalLink
                            key={`${uri}-${index}`}
                            href={uri}
                            openInNewTab
                          >
                            {translations.getTranslateText(prefLabel)}
                          </ExternalLink>
                        )
                    )}
                  </SC.ExternalLinkList>
                }
              />
            )}
            {usage.informationModelReferences.length > 0 && (
              <KeyValueListItem
                property={translations.translate('dataset.informationModel')}
                value={
                  <SC.ExternalLinkList>
                    {usage.informationModelReferences.map(
                      ({ uri, prefLabel }, index) =>
                        uri &&
                        prefLabel && (
                          <ExternalLink
                            key={`${uri}-${index}`}
                            href={uri}
                            openInNewTab
                          >
                            {translations.getTranslateText(prefLabel)}
                          </ExternalLink>
                        )
                    )}
                  </SC.ExternalLinkList>
                }
              />
            )}
            {usage.languages.length > 0 && (
              <KeyValueListItem
                property={translations.translate('dataset.language')}
                value={usage.languages
                  .map(
                    ({ prefLabel }) =>
                      prefLabel && translations.getTranslateText(prefLabel)
                  )
                  .filter(Boolean)
                  .join(', ')}
              />
            )}
            {usage.moreInformationPage && (
              <KeyValueListItem
                property={translations.translate('dataset.landingPage')}
                value={
                  <ExternalLink href={usage.moreInformationPage} openInNewTab>
                    {translations.translate('dataset.landingPageDesc')}
                  </ExternalLink>
                }
              />
            )}
          </KeyValueList>
        </ContentSection>
      )}

      {Object.values(provenance).filter(Boolean).length > 0 && (
        <ContentSection
          id='provenance'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.provenance'
          )}
        >
          <KeyValueList>
            {provenance.provenance && (
              <KeyValueListItem
                property={translations.translate('dataset.provenance')}
                value={provenance.provenance}
              />
            )}
            {provenance.frequency && (
              <KeyValueListItem
                property={translations.translate('dataset.frequency')}
                value={provenance.frequency}
              />
            )}
            {provenance.issued && (
              <KeyValueListItem
                property={translations.translate('dataset.issued')}
                value={provenance.issued}
              />
            )}
            {provenance.modified && (
              <KeyValueListItem
                property={translations.translate('dataset.modified')}
                value={provenance.modified}
              />
            )}
          </KeyValueList>
        </ContentSection>
      )}

      {Object.values(quality).filter(Boolean).length > 0 && (
        <ContentSection
          id='quality'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.quality'
          )}
        >
          <KeyValueList>
            {quality.currentness && (
              <KeyValueListItem
                property={translations.translate('dataset.currentness')}
                value={translations.getTranslateText(quality.currentness)}
              />
            )}
            {quality.completeness && (
              <KeyValueListItem
                property={translations.translate(
                  'dataset.completenessAnnotation'
                )}
                value={translations.getTranslateText(quality.completeness)}
              />
            )}
            {quality.accuracy && (
              <KeyValueListItem
                property={translations.translate('dataset.accuracyAnnotation')}
                value={translations.getTranslateText(quality.accuracy)}
              />
            )}
            {quality.relevance && (
              <KeyValueListItem
                property={translations.translate('dataset.relevanceAnnotation')}
                value={translations.getTranslateText(quality.relevance)}
              />
            )}
            {quality.availability && (
              <KeyValueListItem
                property={translations.translate(
                  'dataset.availabilityAnnotations'
                )}
                value={translations.getTranslateText(quality.availability)}
              />
            )}
          </KeyValueList>
        </ContentSection>
      )}

      {concepts.length > 0 && (
        <ContentSection
          id='concept-references'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.conceptReferences'
          )}
        >
          <KeyValueList $highlighted>
            {concepts.map(
              ({ id, prefLabel, definition }, index) =>
                id && (
                  <KeyValueListItem
                    key={`${id}-${index}`}
                    property={
                      <ExternalLink
                        href={`${env.FDK_PORTAL_HOST}${PATHNAME.FDK_CONCEPTS}/${id}`}
                      >
                        {translations.getTranslateText(prefLabel)}
                      </ExternalLink>
                    }
                    value={translations.getTranslateText(definition?.text)}
                  />
                )
            )}
          </KeyValueList>
        </ContentSection>
      )}

      {(referencedDatasets.length > 0 ||
        referencedResourcesUnResolved.length > 0) && (
        <ContentSection
          id='dataset-references'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.datasetReferences'
          )}
        >
          <KeyValueList>
            {referencedDatasets?.map(
              ({ id, uri, title: datasetTitle }, index) =>
                id &&
                uri &&
                datasetTitle && (
                  <KeyValueListItem
                    key={`${id}-${index}`}
                    property={translations.getTranslateText(
                      referenceTypes?.find(
                        ({ uri: referenceUri }) =>
                          referenceUri ===
                          datasetReferenceTypes.find(
                            ({ source }) => source?.uri === uri
                          )?.referenceType?.uri
                      )?.prefLabel
                    )}
                    value={
                      <InternalLink
                        to={`${PATHNAME.FIND_DATA}${PATHNAME.DATASET_DETAILS}/${id}`}
                        hideIcon
                      >
                        {translations.getTranslateText(datasetTitle)}
                      </InternalLink>
                    }
                  />
                )
            )}
            {referencedResourcesUnResolved?.map(
              (
                { source, referenceType: { uri: referenceTypeUri } = {} },
                index
              ) =>
                source?.uri &&
                referenceTypeUri && (
                  <KeyValueListItem
                    key={`${source.uri}-${index}`}
                    property={translations.getTranslateText(
                      referenceTypes?.find(
                        ({ uri: referenceTypesUri }) =>
                          referenceTypesUri === referenceTypeUri
                      )?.prefLabel
                    )}
                    value={
                      <ExternalLink href={source.uri} rel='noopener noreferrer'>
                        {source.uri}
                      </ExternalLink>
                    }
                  />
                )
            )}
          </KeyValueList>
        </ContentSection>
      )}

      {keywords.length > 0 && (
        <ContentSection
          id='keywords'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.keywords'
          )}
        >
          <InlineList hasBorder>
            {keywords.map((keyword, index) => (
              <InternalLink
                key={`${keyword}-${index}`}
                to={`${PATHNAME.FIND_DATA}?keywords=${encodeURIComponent(
                  keyword ?? ''
                )}`}
                hideIcon
              >
                {keyword}
              </InternalLink>
            ))}
          </InlineList>
        </ContentSection>
      )}

      {qualifiedAttributions.length > 0 && (
        <ContentSection
          id='qualifiedAttributions'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.qualifiedAttributions'
          )}
        >
          <InlineList hasBorder>
            {qualifiedAttributions
              .map(
                ({ agent: { name, prefLabel } }) =>
                  translations.getTranslateText(prefLabel) || name
              )
              .join(', ')}
          </InlineList>
        </ContentSection>
      )}
      {temporalRestrictions.length > 0 && (
        <ContentSection
          id='restrictions'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.restrictions'
          )}
        >
          <KeyValueList>
            {temporalRestrictions.map(({ startDate, endDate }, index) => (
              <KeyValueListItem
                key={`${startDate}-${endDate}-${index}`}
                property={translations.translate(
                  'dataset.temporal.description'
                )}
                value={
                  startDate && endDate
                    ? `${translations.translate(
                        'dataset.temporal.from'
                      )} ${formatDate(
                        dateStringToDate(startDate)
                      )} ${translations.translate(
                        'dataset.temporal.to'
                      )} ${formatDate(dateStringToDate(endDate))}`
                    : formatDate(dateStringToDate(startDate || endDate))
                }
              />
            ))}
          </KeyValueList>
        </ContentSection>
      )}

      {(datasetsRelations.length > 0 || publicServicesRelations.length > 0) && (
        <ContentSection
          id='relationList'
          title={translations.translate(
            'detailsPage.relationList.title.dataset'
          )}
        >
          <RelationList
            parentIdentifier={dataset?.uri}
            datasets={datasetsRelations}
            publicServices={publicServicesRelatedByWithRelationType}
          />
        </ContentSection>
      )}

      {contactPoints.length > 0 && (
        <ContentSection
          id='contact-information'
          title={translations.translate(
            'detailsPage.sectionTitles.dataset.contactInformation'
          )}
        >
          {contactPoints.map(
            ({ organizationUnit, email, hasURL, hasTelephone }, index) => (
              <KeyValueList
                key={`${organizationUnit}-${email}-${hasURL}-${hasTelephone}-${index}`}
              >
                {hasURL && (
                  <KeyValueListItem
                    property={translations.translate(
                      'contactPoint.contactPoint'
                    )}
                    value={
                      <ExternalLink href={hasURL} openInNewTab>
                        {translations.getTranslateText(organizationUnit) ??
                          hasURL}
                      </ExternalLink>
                    }
                  />
                )}
                {email && (
                  <KeyValueListItem
                    property={translations.translate('contactPoint.email')}
                    value={
                      <ExternalLink
                        href={`mailto:${email}`}
                        rel='noopener noreferrer'
                      >
                        {email}
                      </ExternalLink>
                    }
                  />
                )}
                {hasTelephone && (
                  <KeyValueListItem
                    property={translations.translate('contactPoint.telephone')}
                    value={hasTelephone}
                  />
                )}
              </KeyValueList>
            )
          )}
        </ContentSection>
      )}
      <ContentSection
        id='community_section'
        title={translations.translate('detailsPage.community.title')}
      >
        {topics.length > 0 ? (
          <>
            <span>
              <Translation id='detailsPage.community.subtitle.content.dataset' />
              {topics.length}
              <Translation
                id={
                  topics.length === 1
                    ? 'detailsPage.community.subtitle.mention'
                    : 'detailsPage.community.subtitle.mentionPlural'
                }
              />
              <InternalLink to={PATHNAME.COMMUNITY} hideIcon>
                <Translation id='detailsPage.community.subtitle.link' />
              </InternalLink>
            </span>
            {topics.map(topic => (
              <Topic
                key={`topic_${topic.tid}`}
                topic={topic}
                hideUserInfoAndTags
              />
            ))}
          </>
        ) : (
          <span>
            <Translation id='detailsPage.community.subtitle.empty.dataset' />
            <InternalLink to={PATHNAME.COMMUNITY} hideIcon>
              <Translation id='detailsPage.community.subtitle.link' />
            </InternalLink>
          </span>
        )}
      </ContentSection>
      <ContentSection
        id='comment-section'
        title={
          translations.translate('community.comments.sectionTitle', {
            entityType: translations.translate(
              `community.comments.entityTypes.${entity}`
            ) as string
          }) as string
        }
      >
        <CommentSection entityId={datasetId ?? ''} />
      </ContentSection>
    </DetailsPage>
  ) : (
    <ErrorPage errorCode='404' />
  );
};

export default compose<FC<Props>>(
  memo,
  withDataset,
  withReferenceData,
  withDatasets,
  withDataServices,
  withPublicServices,
  withCommunityTopicSearch,
  withConcepts,
  withErrorBoundary(ErrorPage)
)(DatasetDetailsPage);
