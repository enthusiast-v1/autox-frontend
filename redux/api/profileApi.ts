import { baseApi } from './baseApi';

export const profileApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query({
      query: id => ({
        url: `/profiles/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
