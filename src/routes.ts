import { PATHNAME } from './enums';

export default {
  [PATHNAME.MAIN]: 'main-page',
  [PATHNAME.ABOUT]: 'article-page',
  [PATHNAME.FIND_DATA]: 'datasets-page',
  [`${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}`]: 'article-page',
  [`${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}${PATHNAME.PRIVATE_SECTOR}`]:
    'article-page',
  [`${PATHNAME.FIND_DATA}${PATHNAME.GUIDEANCE_AND_COMPETENCE}`]: 'article-page',
  [`${PATHNAME.FIND_DATA}${PATHNAME.GUIDEANCE_AND_COMPETENCE}${PATHNAME.LEGAL_FRAMEWORK}`]:
    'article-page',
  [`${PATHNAME.FIND_DATA}${PATHNAME.DATASET_DETAILS}/:datasetId`]:
    'details-page-dataset',
  [PATHNAME.NEWS]: 'news-page',
  [`${PATHNAME.NEWS}/:newsArticleId`]: 'news-article-page',
  [PATHNAME.COMMUNITY]: 'community-categories-page',
  [PATHNAME.COMMUNITY_TAGS]: 'community-tags-page',
  [PATHNAME.COMMUNITY_ABOUT]: 'article-page',
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
  [PATHNAME.CONTACT]: 'contact-page',
  [PATHNAME.ORGANIZATION]: 'organizations-page',
  [`${PATHNAME.ORGANIZATION}/:organizationId`]: 'organization-page',
  [`${PATHNAME.ORGANIZATION}/:organizationId${PATHNAME.METADATAQUALITY}`]:
    'metadata-quality-datasets-page',
  [`${PATHNAME.ORGANIZATION}/:organizationId${PATHNAME.METADATAQUALITY}/:datasetId`]:
    'metadata-quality-dataset-page',
  [PATHNAME.COURSES]: 'courses-page',
  [PATHNAME.GUIDANCE]: 'guidance-page',
  [`${PATHNAME.GUIDANCE}/tilby-data`]: 'article-page-strapi',
  [`${PATHNAME.GUIDANCE}/bruke-data`]: 'article-page-strapi'
};
