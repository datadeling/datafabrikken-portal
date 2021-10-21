import {
  GET_COMMUNITY_TAGS_REQUESTED,
  GET_COMMUNITY_TAGS_SUCCEEDED,
  GET_COMMUNITY_TAGS_FAILED,
  RESET_COMMUNITY_TAGS
} from './action-types';

import { CommunityTag } from '../../../types';

export function getTagsRequested() {
  return {
    type: GET_COMMUNITY_TAGS_REQUESTED
  };
}

export function getTagsSucceeded(tags: CommunityTag[]) {
  return {
    type: GET_COMMUNITY_TAGS_SUCCEEDED,
    payload: {
      tags
    }
  };
}

export function getTagsFailed(message: string) {
  return {
    type: GET_COMMUNITY_TAGS_FAILED,
    payload: {
      message
    }
  };
}

export function resetTags() {
  return {
    type: RESET_COMMUNITY_TAGS
  };
}
