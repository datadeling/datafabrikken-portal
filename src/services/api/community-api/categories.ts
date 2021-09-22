import { communityApiGet } from './host';

export const getCategories = () => communityApiGet(`/categories`);

export const extractCategories = (data: any) => data.categories ?? [];
