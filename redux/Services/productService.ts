import { apiService } from "../api/api";

const productService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<null, null>({
      query: () => ({ method: "GET", url: "laptop/get" }),
    }),
  }),
});

export const { useGetProductQuery } = productService;
