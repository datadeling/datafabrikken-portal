import {
  GET_COMMUNITY_CATEGORY_REQUESTED,
  GET_COMMUNITY_CATEGORY_SUCCEEDED,
  GET_COMMUNITY_CATEGORY_FAILED,
  RESET_COMMUNITY_CATEGORY
} from './action-types';

import { CommunityCategory } from '../../../types';

export function getCategoryRequested(id: string) {
  return {
    type: GET_COMMUNITY_CATEGORY_REQUESTED,
    payload: {
      id
    }
  };
}

export function getCategorySucceeded(category: CommunityCategory) {
  return {
    type: GET_COMMUNITY_CATEGORY_SUCCEEDED,
    payload: {
      category
    }
  };
}

export function getCategoryFailed(message: string) {
  return {
    type: GET_COMMUNITY_CATEGORY_FAILED,
    payload: {
      message
    }
  };
}

export function resetCategory() {
  return {
    type: RESET_COMMUNITY_CATEGORY
  };
}
