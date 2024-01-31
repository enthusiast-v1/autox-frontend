import { baseApi } from './baseApi';

export const vehicleApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createVehicle: build.mutation({
      query: () => ({
        url: '/vehicles',
        method: 'POST',
        data: '',
      }),
    }),
  }),
});

export const { useCreateVehicleMutation } = vehicleApi;
