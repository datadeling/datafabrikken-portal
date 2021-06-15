import type { Environment } from './enums';

export interface EnvironmentVariables {
  ENV: Environment;
  SEARCH_FULLTEXT_HOST: string;
  REFERENCE_DATA_HOST: string;
  FDK_PORTAL_HOST: string;
  CMS_API_HOST: string;
}
