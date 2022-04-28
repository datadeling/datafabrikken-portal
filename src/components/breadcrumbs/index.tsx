import React, { FC } from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Link as RouterLink } from 'react-router-dom';

import { PATHNAME } from '../../enums';
import Translation from '../translation';

import Container from '../container';
import Link from '../link';

import ArticleBreadCrumb from './article-breadcrumb';
import DatasetBreadcrumb from './dataset-breadcrumb';
import CommunityCategoryBreadCrumb from './community-category-breadcrumb';
import CommunityTopicBreadCrumb from './community-topic-breadcrumb';
import CommunityTagBreadCrumb from './community-tag-breadcrumb';
import OrganizationPageBreadcrumb from './organization-breadcrumb';
import MetadataDatasetBreadcrumb from './metadata-dataset-breadcrumb';

import SC from './styled';
import { StrapiArticleBreadcrumb } from './strapi-article-breadcrumb';

interface Props {}

const routes = [
  {
    path: PATHNAME.MAIN,
    breadcrumb: () => <Translation id='header.home' />
  },
  {
    path: PATHNAME.ABOUT,
    breadcrumb: () => <Translation id='header.about' />
  },
  {
    path: `${PATHNAME.FIND_DATA}`,
    breadcrumb: () => <Translation id='header.findData' />
  },
  {
    path: `${PATHNAME.DATA_SOURCES}${PATHNAME.PRIVATE_SECTOR}`,
    breadcrumb: () => <ArticleBreadCrumb />
  },
  {
    path: `${PATHNAME.DATA_SOURCES}`,
    breadcrumb: 'Oversikt over datakilder'
  },
  {
    path: `${PATHNAME.GUIDEANCE_AND_COMPETENCE}${PATHNAME.LEGAL_FRAMEWORK}`,
    breadcrumb: () => <ArticleBreadCrumb />
  },
  {
    path: `${PATHNAME.GUIDEANCE_AND_COMPETENCE}`,
    breadcrumb: 'Veiledere og kompetanse'
  },

  {
    path: PATHNAME.NEWS,
    breadcrumb: () => <Translation id='header.news' />
  },
  {
    path: `${PATHNAME.NEWS}/:newsArticleId`,
    breadcrumb: () => <ArticleBreadCrumb />
  },
  {
    path: PATHNAME.CONTACT,
    breadcrumb: () => <Translation id='header.contact' />
  },
  {
    path: PATHNAME.COMMUNITY,
    breadcrumb: () => <Translation id='header.community' />
  },
  {
    path: `${PATHNAME.FIND_DATA}${PATHNAME.DATASET_DETAILS}/:id`,
    breadcrumb: () => <DatasetBreadcrumb />
  },
  {
    path: PATHNAME.COMMUNITY_ABOUT,
    breadcrumb: () => <Translation id='header.communityAbout' />
  },
  {
    path: PATHNAME.COMMUNITY_RECENT,
    breadcrumb: () => <Translation id='community.header.recent' />
  },
  {
    path: PATHNAME.COMMUNITY_POPULAR,
    breadcrumb: () => <Translation id='community.header.popular' />
  },
  {
    path: PATHNAME.COMMUNITY_TAGS,
    breadcrumb: () => <Translation id='community.header.tags' />
  },
  {
    path: `${PATHNAME.COMMUNITY_TAGS}/:tag`,
    breadcrumb: () => <CommunityTagBreadCrumb />
  },
  {
    path: `${PATHNAME.COMMUNITY}/:categorySlugId/:categorySlugTitle`,
    breadcrumb: () => <CommunityCategoryBreadCrumb />
  },
  {
    path: `${PATHNAME.COMMUNITY}/:categorySlugId/:categorySlugTitle/:topicSlugId/:topicSlugTitle`,
    breadcrumb: () => <CommunityTopicBreadCrumb />
  },
  {
    path: PATHNAME.COMMUNITY_SEARCH,
    breadcrumb: () => <Translation id='community.header.search' />
  },
  {
    path: `${PATHNAME.ORGANIZATION}/:organizationId`,
    breadcrumb: () => <OrganizationPageBreadcrumb />
  },
  {
    path: `${PATHNAME.ORGANIZATION}`,
    breadcrumb: () => <Translation id='header.organizations' />
  },
  {
    path: `${PATHNAME.ORGANIZATION}/:organizationId${PATHNAME.METADATAQUALITY}`,
    breadcrumb: () => <Translation id='header.metadataquality' />
  },
  {
    path: `${PATHNAME.ORGANIZATION}/:organizationId${PATHNAME.METADATAQUALITY}/:datasetId`,
    breadcrumb: () => <MetadataDatasetBreadcrumb />
  },
  {
    path: PATHNAME.COURSES,
    breadcrumb: () => <Translation id='header.courses' />
  },
  {
    path: PATHNAME.GUIDANCE,
    breadcrumb: () => <Translation id='header.guidance' />
  },
  {
    path: `${PATHNAME.GUIDANCE}/:articleTitle`,
    breadcrumb: () => <StrapiArticleBreadcrumb />
  }
];

const options = {
  disableDefaults: true,
  excludePaths: []
};

const Breadcrumbs: FC<Props> = ({ breadcrumbs }: any) =>
  breadcrumbs?.length > 1 ? (
    <SC.Root>
      <Container>
        <SC.BreadCrumbs>
          {breadcrumbs.map(({ key, match, breadcrumb }: any, index: number) => (
            <SC.BreadCrumb key={key}>
              {index < breadcrumbs.length - 1 && (
                <Link as={RouterLink} to={match?.url} hideIcon>
                  {breadcrumb}
                </Link>
              )}
              {index === breadcrumbs.length - 1 && <span>{breadcrumb}</span>}
            </SC.BreadCrumb>
          ))}
        </SC.BreadCrumbs>
      </Container>
    </SC.Root>
  ) : null;
export default withBreadcrumbs(routes, options)(Breadcrumbs);
