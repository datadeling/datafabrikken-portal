import {
  GET_COMMUNITY_TOPIC_REQUESTED,
  GET_COMMUNITY_TOPIC_SUCCEEDED,
  GET_COMMUNITY_TOPIC_FAILED,
  RESET_COMMUNITY_TOPIC
} from './action-types';

import { CommunityTopic } from '../../../types';

export function getTopicRequested(slug: string) {
  return {
    type: GET_COMMUNITY_TOPIC_REQUESTED,
    payload: {
      slug
    }
  };
}

export function getTopicSucceeded(topic: CommunityTopic) {
  return {
    type: GET_COMMUNITY_TOPIC_SUCCEEDED,
    payload: {
      topic
    }
  };
}

export function getTopicFailed(message: string) {
  return {
    type: GET_COMMUNITY_TOPIC_FAILED,
    payload: {
      message
    }
  };
}

export function resetTopic() {
  return {
    type: RESET_COMMUNITY_TOPIC
  };
}
