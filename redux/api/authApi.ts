import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    userRegister: build.mutation({
      query: () => ({
        url: '/auth/register',
        method: 'POST',
        data: '',
      }),
    }),

    userLogin: build.mutation({
      query: () => ({
        url: '/auth/login',
        method: 'POST',
        data: '',
      }),
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = authApi;
