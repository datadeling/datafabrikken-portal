import { searchFullTextApiGet } from './host';

export const getDatasetSearchSuggestions = (q: string) =>
  searchFullTextApiGet(`/suggestion/datasets?q=${encodeURI(q)}`);

export const extractSuggestions = (searchResponse: any) =>
  searchResponse?.suggestions ?? [];
