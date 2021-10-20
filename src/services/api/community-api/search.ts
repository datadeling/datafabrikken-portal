import axios from 'axios';
import env from '../../../env';
import { CommunityPost, CommunityTopic } from '../../../types';

const { COMMUNITY_API_HOST } = env;

export const searchCommunity = (queryTerm: string) =>
  axios
    .get(`${COMMUNITY_API_HOST}/api/search?term=${queryTerm}`)
    .then(({ data }) => data);

export const getTopicById = (tid: number) =>
  axios.get(`${COMMUNITY_API_HOST}/api/topic/${tid}`).then(({ data }) => data);

export const extractTopicsFromSearch = (
  searchResponse: any
): CommunityTopic[] => {
  const postIds = new Set();
  const uniqueTopics: CommunityTopic[] = [];

  searchResponse.posts.forEach(({ topic }: CommunityPost) => {
    if (!postIds.has(topic.tid)) {
      uniqueTopics.push(topic);
      postIds.add(topic.tid);
    }
  });

  return uniqueTopics;
};
