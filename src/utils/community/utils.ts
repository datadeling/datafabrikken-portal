import {
  CommunityCategory,
  CommunityPost,
  CommunityTopic
} from '../../types/domain.d';

export const categorySorter = (
  { order: orderFirst }: CommunityCategory,
  { order: orderSecond }: CommunityCategory
) => {
  if (orderFirst < orderSecond) {
    return -1;
  }
  if (orderFirst > orderSecond) {
    return 1;
  }
  return 0;
};

export const postSorter = (first: CommunityPost, second: CommunityPost) => {
  if (Date.parse(first.timestampISO) > Date.parse(second.timestampISO)) {
    return 1;
  }
  if (Date.parse(first.timestampISO) < Date.parse(second.timestampISO)) {
    return -1;
  }
  return 0;
};

export const compareTopics = (
  first: CommunityTopic,
  second: CommunityTopic,
  sortByDateAsc: boolean,
  sortByDateDesc: boolean
) => {
  if (sortByDateAsc) {
    if (first.timestamp > second.timestamp) {
      return 1;
    }
    if (first.timestamp < second.timestamp) {
      return -1;
    }
    return 0;
  }
  if (sortByDateDesc) {
    if (first.timestamp > second.timestamp) {
      return -1;
    }
    if (first.timestamp < second.timestamp) {
      return 1;
    }
    return 0;
  }
  if (first.index < second.index) {
    return -1;
  }
  if (first.index > second.index) {
    return 1;
  }
  return 0;
};
