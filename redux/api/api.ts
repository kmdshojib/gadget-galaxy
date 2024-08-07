import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import Axios, { AxiosRequestConfig, AxiosError } from "axios";

const axiosBaseQuery = (): BaseQueryFn<AxiosRequestConfig, unknown, AxiosError> => async ({ url, method, data, params }) => {
  try {
    const baseURL ="https://gadget-galaxy-backend.vercel.app/api/v1/"
    // const baseURL = process.env.NODE_ENV === 'production'
    //   ? "https://gadget-galaxy-backend.vercel.app/api/v1/"
    //   : "http://localhost:5000/api/v1/";

    Axios.defaults.baseURL = baseURL;

    const axiosConfig: AxiosRequestConfig = {
      url,
      method,
      params: { ...params },
    };

    if (method === "POST") {
      axiosConfig.data = data;
    }

    const result = await Axios(axiosConfig);
    return { data: result.data };
  } catch (axiosError) {
    const error = axiosError as AxiosError;
    return { error };
  }
};

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  reducerPath: "apiService",
});
