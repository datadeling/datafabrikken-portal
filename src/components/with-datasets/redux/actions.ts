import {
  GET_DATASETS_REQUESTED,
  GET_DATASETS_SUCCEEDED,
  GET_DATASETS_FAILED,
  RESET_DATASETS,
  LOAD_MORE_DATASETS_REQUESTED,
  LOAD_MORE_DATASETS_SUCCEEDED,
  LOAD_MORE_DATASETS_FAILED,
  GET_DATASETS_RELATIONS_REQUESTED,
  GET_DATASETS_RELATIONS_SUCCEEDED,
  GET_DATASETS_RELATIONS_FAILED,
  RESET_DATASETS_RELATIONS
} from './action-types';

import type { Dataset, EsPaged } from '../../../types';

export interface GetDatasetsParams {
  page?: number;
  q?: string;
  opendata?: string;
  losTheme?: string;
  theme?: string;
  accessRights?: string;
  format?: string;
  uris?: string[];
  referencesSource?: string;
  keywords?: string;
  last_x_days?: string;
  id?: string;
  orgPath?: string;
  spatial?: any;
  provenance?: string;
  accessService?: any;
  subject?: any;
  subjectExists?: any;
  catalog_name?: any;
  info_model?: any;
  conformsTo?: any;
  relatedToInfoModel?: any;
  organizationNumber?: any;
}

export function getPagedDatasetsRequested(params?: GetDatasetsParams) {
  return {
    type: GET_DATASETS_REQUESTED,
    payload: {
      params
    }
  };
}

export function getPagedDatasetsSucceeded(pagedDatasets: EsPaged<Dataset>) {
  return {
    type: GET_DATASETS_SUCCEEDED,
    payload: {
      pagedDatasets
    }
  };
}

export function getPagedDatasetsFailed(message: string) {
  return {
    type: GET_DATASETS_FAILED,
    payload: {
      message
    }
  };
}

export function resetPagedDatasets() {
  return {
    type: RESET_DATASETS
  };
}

export function loadMoreDatasetsRequested(
  catalogId: string,
  entityType: string,
  contexts: string,
  page: number
) {
  return {
    type: LOAD_MORE_DATASETS_REQUESTED,
    payload: {
      catalogId,
      entityType,
      contexts,
      page
    }
  };
}

export function loadMoreDatasetsSucceeded(pagedAssessments: EsPaged<Dataset>) {
  return {
    type: LOAD_MORE_DATASETS_SUCCEEDED,
    payload: pagedAssessments
  };
}

export function loadMoreDatasetsFailed(message: string) {
  return {
    type: LOAD_MORE_DATASETS_FAILED,
    payload: {
      message
    }
  };
}

export function getDatasetsRelationsRequested(params?: GetDatasetsParams) {
  return {
    type: GET_DATASETS_RELATIONS_REQUESTED,
    payload: {
      params
    }
  };
}

export function getDatasetsRelationsSucceeded(pagedDatasets: EsPaged<Dataset>) {
  return {
    type: GET_DATASETS_RELATIONS_SUCCEEDED,
    payload: {
      pagedDatasets
    }
  };
}

export function getDatasetsRelationsFailed(message: string) {
  return {
    type: GET_DATASETS_RELATIONS_FAILED,
    payload: {
      message
    }
  };
}

export function resetDatasetsRelations() {
  return {
    type: RESET_DATASETS_RELATIONS
  };
}
