import { PATHNAME } from './enums';

export default {
  [PATHNAME.MAIN]: undefined,
  [PATHNAME.ABOUT]: undefined,
  [PATHNAME.SEARCH]: 'datasets-page',
  [`${PATHNAME.SEARCH}${PATHNAME.DATASET_DETAILS}/:datasetId`]:
    'details-page-dataset',
  [PATHNAME.NEWS]: undefined,
  [`${PATHNAME.NEWS}/:newsArticleId`]: undefined,
  [PATHNAME.COMMUNITY]: 'community-categories-page',
  [PATHNAME.COMMUNITY_TAGS]: 'community-tags-page',
  [PATHNAME.COMMUNITY_ABOUT]: undefined,
  [`${PATHNAME.COMMUNITY}/:categorySlugId/:categorySlugTitle`]:
    'community-topics-page',
  [PATHNAME.COMMUNITY_POPULAR]: 'community-topics-page',
  [PATHNAME.COMMUNITY_RECENT]: 'community-topics-page',
  [`${PATHNAME.COMMUNITY_TAGS}/:tag`]: 'community-topics-page',
  [`${PATHNAME.COMMUNITY}/:categorySlugId/:categorySlugTitle/:topicSlugId/:topicSlugTitle`]:
    'community-topic-page',
  [PATHNAME.COMMUNITY_SEARCH]: 'community-search-page',
  [`${PATHNAME.COMMUNITY_SEARCH}/:topicSlugId/:topicSlugTitle`]:
    'community-topic-page',
  [PATHNAME.CONTACT]: undefined,
  [PATHNAME.ORGANIZATION]: 'organizations-page',
  [`${PATHNAME.ORGANIZATION}/:organizationId`]: 'organization-page',
  [`${PATHNAME.ORGANIZATION}/:organizationId${PATHNAME.METADATAQUALITY}`]:
    'metadata-quality-datasets-page',
  [`${PATHNAME.ORGANIZATION}/:organizationId${PATHNAME.METADATAQUALITY}/:datasetId`]:
    'metadata-quality-dataset-page',
  [PATHNAME.COURSES]: undefined,
  [PATHNAME.GUIDANCE]: undefined,
  [`${PATHNAME.OFFER_DATA}/hvordan-tilby-data`]: undefined,
  [`${PATHNAME.USE_DATA}`]: undefined
};
