import {
  GET_DATASETS_REQUESTED,
  GET_DATASETS_SUCCEEDED,
  GET_DATASETS_FAILED,
  RESET_DATASETS,
  LOAD_MORE_DATASETS_REQUESTED,
  LOAD_MORE_DATASETS_SUCCEEDED,
  LOAD_MORE_DATASETS_FAILED
} from './action-types';

import type { Dataset, Paged } from '../../../types';

interface GetDatasetsParams {
  page?: number;
  q?: string;
  opendata?: string;
  losTheme?: string;
  theme?: string;
  accessRights?: string;
  format?: string;
}

export function getPagedDatasetsRequested(params?: GetDatasetsParams) {
  return {
    type: GET_DATASETS_REQUESTED,
    payload: {
      params
    }
  };
}

export function getPagedDatasetsSucceeded(pagedDatasets: Paged<Dataset>) {
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

export function loadMoreDatasetsSucceeded(pagedAssessments: Paged<Dataset>) {
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
