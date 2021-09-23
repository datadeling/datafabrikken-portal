import { communityApiGet } from './host';

export const getTopic = (slug: string) => communityApiGet(`/topic/${slug}`);
