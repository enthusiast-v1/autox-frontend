import { baseApi } from './baseApi';

export const driverApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createDriver: build.mutation({
      query: () => ({
        url: '/drivers',
        method: 'POST',
        data: '',
      }),
    }),

    getAllDriver: build.query({
      query: () => ({
        url: '/drivers',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateDriverMutation, useGetAllDriverQuery } = driverApi;
