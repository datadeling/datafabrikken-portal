import {
  GET_COMMUNITY_RECENT_TOPICS_REQUESTED,
  GET_COMMUNITY_POPULAR_TOPICS_REQUESTED,
  GET_COMMUNITY_TOPICS_BY_TAG_REQUESTED,
  GET_COMMUNITY_TOPICS_SUCCEEDED,
  GET_COMMUNITY_TOPICS_FAILED,
  RESET_COMMUNITY_TOPICS
} from './action-types';

import { CommunityTopic } from '../../../types';

export function getRecentTopicsRequested() {
  return {
    type: GET_COMMUNITY_RECENT_TOPICS_REQUESTED
  };
}

export function getPopularTopicsRequested() {
  return {
    type: GET_COMMUNITY_POPULAR_TOPICS_REQUESTED
  };
}

export function getTopicsByTagRequested(tag: string) {
  return {
    type: GET_COMMUNITY_TOPICS_BY_TAG_REQUESTED,
    payload: {
      tag
    }
  };
}

export function getTopicsSucceeded(
  topics: CommunityTopic[],
  tag: string | null
) {
  return {
    type: GET_COMMUNITY_TOPICS_SUCCEEDED,
    payload: {
      topics,
      tag
    }
  };
}

export function getTopicsFailed(message: string) {
  return {
    type: GET_COMMUNITY_TOPICS_FAILED,
    payload: {
      message
    }
  };
}

export function resetTopics() {
  return {
    type: RESET_COMMUNITY_TOPICS
  };
}
