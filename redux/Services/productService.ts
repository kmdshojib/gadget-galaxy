import { apiService } from "../api/api";

const productService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<null, null>({
      query: () => ({ method: "GET", url: "laptop/get" }),
    }),
    addProduct: build.mutation<null, null>({
      query: (productData) => ({
        method: "POST",
        url: "laptop/add",
        data: productData
      }),
    })
  }),
});

export const { useGetProductQuery, useAddProductMutation } = productService;
