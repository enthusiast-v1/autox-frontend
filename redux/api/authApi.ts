import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    userRegister: build.mutation({
      query: registerData => ({
        url: '/auth/register',
        method: 'POST',
        data: registerData,
      }),
    }),

    userLogin: build.mutation({
      query: loginData => ({
        url: '/auth/login',
        method: 'POST',
        data: loginData,
      }),
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = authApi;
