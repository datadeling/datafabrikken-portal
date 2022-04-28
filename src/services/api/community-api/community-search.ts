import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import env from '../../../env';
import { CommunitySearchItem } from '../../../types';

const { COMMUNITY_API_HOST } = env;

export const communitySearchApi = createApi({
  reducerPath: 'communitySearchApi',
  tagTypes: ['CommunityPost'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${COMMUNITY_API_HOST}/api/search`
  }),
  endpoints: builder => ({
    searchCommunity: builder.query<
      CommunitySearchItem,
      {
        queryTerm: string;
        page: number;
      }
    >({
      query: ({ queryTerm, page }) =>
        `?term=${queryTerm}&page=${page}&in=titles`
    })
  })
});

export const { useSearchCommunityQuery } = communitySearchApi;
