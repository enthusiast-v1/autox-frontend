import { baseApi } from './baseApi';

export const bookingApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createBooking: build.mutation({
      query: () => ({
        url: '/bookings',
        method: 'POST',
        data: '',
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
