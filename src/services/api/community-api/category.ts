import { communityApiGet } from './host';

export const getCategory = (slug: string) =>
  communityApiGet(`/category/${slug}`);
