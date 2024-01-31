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
  }),
});

export const { useCreateDriverMutation } = driverApi;
