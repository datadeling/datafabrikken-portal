import { validateEnv } from './utils/common';

import { Environment } from './types/enums';

export default validateEnv(
  (window as any).env ?? {
    ENV: Environment.DEVELOPMENT,
    OIDC_ISSUER:
      'https://sso.staging.fellesdatakatalog.digdir.no/auth/realms/fdk',
    OIDC_CLIENT_SECRET: '',
    SEARCH_FULLTEXT_HOST: 'https://search.staging.fellesdatakatalog.digdir.no',
    REFERENCE_DATA_HOST: 'https://data.norge.no',
    FDK_PORTAL_HOST: 'https://data.norge.no',
    CMS_API_HOST: 'https://cms-datafabrikken.digdir.no',
    COMMUNITY_API_HOST: 'https://community.staging.fellesdatakatalog.digdir.no',
    METADATA_QUALITY_ASSESSMENT_API:
      'https://metadata-quality.staging.fellesdatakatalog.digdir.no',
    ORGANIZATION_HOST:
      'https://organization-bff.staging.fellesdatakatalog.digdir.no',
    ORGANIZATION_CATALOGUE_HOST:
      'https://organization-catalogue.staging.fellesdatakatalog.digdir.no',
    REPORT_API_HOST: 'https://reports-bff.staging.fellesdatakatalog.digdir.no',
    FDK_DATASET_PREVIEW_API_KEY: ''
  }
);
