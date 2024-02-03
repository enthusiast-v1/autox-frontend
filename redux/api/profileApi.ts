import { baseApi } from './baseApi';

export const profileApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query({
      query: id => ({
        url: `/profile/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
