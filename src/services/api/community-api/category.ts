import { communityApiGet } from './host';

export const getCategory = (categoryId: string) =>
  communityApiGet(`/category/${categoryId}`);
