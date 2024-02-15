import { baseApi } from './baseApi';

export const bookingApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createBooking: build.mutation({
      query: data => ({
        url: '/bookings',
        method: 'POST',
        data: data,
      }),
    }),

    getAllBookings: build.query({
      query: () => ({
        url: '/bookings',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateBookingMutation, useGetAllBookingsQuery } = bookingApi;
