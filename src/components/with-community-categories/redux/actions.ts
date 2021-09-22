import {
  GET_COMMUNITY_CATEGORIES_REQUESTED,
  GET_COMMUNITY_CATEGORIES_SUCCEEDED,
  GET_COMMUNITY_CATEGORIES_FAILED,
  RESET_COMMUNITY_CATEGORIES
} from './action-types';

import { CommunityCategory } from '../../../types';

export function getCategoriesRequested() {
  return {
    type: GET_COMMUNITY_CATEGORIES_REQUESTED
  };
}

export function getCategoriesSucceeded(categories: CommunityCategory[]) {
  return {
    type: GET_COMMUNITY_CATEGORIES_SUCCEEDED,
    payload: {
      categories
    }
  };
}

export function getCategoriesFailed(message: string) {
  return {
    type: GET_COMMUNITY_CATEGORIES_FAILED,
    payload: {
      message
    }
  };
}

export function resetCategories() {
  return {
    type: RESET_COMMUNITY_CATEGORIES
  };
}
