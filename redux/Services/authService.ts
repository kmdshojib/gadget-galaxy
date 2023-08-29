import { apiService } from "../api/api";


export const authService = apiService.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<any, any>({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        data: credentials,
      }),
    }),
    registerUser: build.mutation<any, any>({
      query: (userData) => ({
        url: "user/register",
        method: "POST",
        data: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authService;
