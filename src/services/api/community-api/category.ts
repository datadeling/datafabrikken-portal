import { communityApiGet } from './host';

export const getCategory = (slug: string, page: number, sort?: string) =>
  communityApiGet(
    `/category/${slug}?nextStart=20&page=${page}${sort ? `&sort=${sort}` : ''}`
  );
