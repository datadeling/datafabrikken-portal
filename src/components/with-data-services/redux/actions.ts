import { DataService } from '../../../types';
import {
  GET_DATA_SERVICES_RELATIONS_REQUESTED,
  GET_DATA_SERVICES_RELATIONS_SUCCEEDED,
  GET_DATA_SERVICES_RELATIONS_FAILED,
  RESET_DATA_SERVICES_RELATIONS
} from './action-types';

interface GetDataServicesParams {
  dataseturi?: string;
  size?: number;
  endpointDescription?: string[];
  servesDataset?: string;
  uris?: string[];
}

export function getDataServicesRelationsRequested(
  params: GetDataServicesParams
) {
  return {
    type: GET_DATA_SERVICES_RELATIONS_REQUESTED,
    payload: {
      params
    }
  };
}

export function getDataServicesRelationsSucceeded(dataServices: DataService[]) {
  return {
    type: GET_DATA_SERVICES_RELATIONS_SUCCEEDED,
    payload: {
      dataServices
    }
  };
}

export function getDataServicesRelationsFailed(message: string) {
  return {
    type: GET_DATA_SERVICES_RELATIONS_FAILED,
    payload: {
      message
    }
  };
}

export function resetDataServicesRelations() {
  return {
    type: RESET_DATA_SERVICES_RELATIONS
  };
}
