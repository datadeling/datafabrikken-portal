import { CommunityCategory, CommunityPost } from '../../types/domain.d';

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
