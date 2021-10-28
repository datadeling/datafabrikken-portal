import React, { memo, FC } from 'react';
import { compose } from 'redux';
import Translation from '../../translation';
import withOrganization, {
  Props as OrganizationProps
} from '../../with-organization';

interface Props extends OrganizationProps {}

const OrganizationPageBreadcrumb: FC<Props> = ({ organization }) =>
  organization ? (
    <Translation text={organization.prefLabel ?? organization.name} />
  ) : (
    <Translation id='errorPage.pageNotFound' />
  );

export default compose<FC>(memo, withOrganization)(OrganizationPageBreadcrumb);
