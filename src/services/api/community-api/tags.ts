import { communityApiGet } from './host';

export const getTags = () => communityApiGet(`/tags`);

export const extractTags = (data: any) => data.tags ?? [];
