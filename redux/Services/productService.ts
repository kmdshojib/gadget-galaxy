import { apiService } from "../api/api";

const productService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<null, null>({
      query: () => ({ method: "GET", url: "laptop/get" }),
    }),
    addProduct: build.mutation<any, any>({
      query: (data) => ({
        method: "POST",
        url: "laptop/add",
        data: data
      }),
    })
  }),
});

export const { useGetProductQuery, useAddProductMutation } = productService;
