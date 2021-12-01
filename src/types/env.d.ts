import type { Environment } from './enums';

export interface EnvironmentVariables {
  ENV: Environment;
  OIDC_ISSUER: string;
  OIDC_CLIENT_SECRET: string;
  SEARCH_FULLTEXT_HOST: string;
  REFERENCE_DATA_HOST: string;
  FDK_PORTAL_HOST: string;
  CMS_API_HOST: string;
  COMMUNITY_API_HOST: string;
  METADATA_QUALITY_ASSESSMENT_API: string;
  ORGANIZATION_HOST: string;
  ORGANIZATION_CATALOGUE_HOST: string;
  REPORT_API_HOST: string;
  FDK_DATASET_PREVIEW_API_KEY: string;
}
