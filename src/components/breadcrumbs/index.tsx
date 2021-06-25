import React, { FC } from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Link as RouterLink } from 'react-router-dom';

import { PATHNAME } from '../../enums';
import Translation from '../translation';

import Container from '../container';
import Link from '../link';

import ArticleBreadCrumb from './article-breadcrumb';
import SC from './styled';

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
    path: `${PATHNAME.FIND_DATA}${PATHNAME.DATASETS}`,
    breadcrumb: () => <Translation id='findDataPage.findData' />
  },
  {
    path: `${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}${PATHNAME.PRIVATE_SECTOR}`,
    breadcrumb: () => <ArticleBreadCrumb />
  },
  {
    path: `${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}`,
    breadcrumb: 'Oversikt over datakilder'
  },
  {
    path: `${PATHNAME.FIND_DATA}${PATHNAME.GUIDEANCE_AND_COMPETENCE}${PATHNAME.LEGAL_FRAMEWORK}`,
    breadcrumb: () => <ArticleBreadCrumb />
  },
  {
    path: `${PATHNAME.FIND_DATA}${PATHNAME.GUIDEANCE_AND_COMPETENCE}`,
    breadcrumb: 'Veiledere og kompetanse'
  },
  {
    path: PATHNAME.FIND_DATA,
    breadcrumb: () => <Translation id='header.findData' />
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
    path: PATHNAME.DATA_COMMUNITY,
    breadcrumb: () => <Translation id='header.community' />
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
                <Link as={RouterLink} to={match?.url} showIcon={false}>
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
