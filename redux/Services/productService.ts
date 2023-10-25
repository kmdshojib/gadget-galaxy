import { apiService } from "../api/api";

const productService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<null, null>({
      query: () => ({ method: "GET", url: "laptop/get" }),
    }),
    getProductById: build.query<null, any>({
      query: (id: any) => ({ method: "GET", url: `laptop/getProductById/${id}` })
    }),
    getProductByCategory: build.query<null, any>({
      query: (category: any) => ({ method: "GET", url: `laptop/getProductByCategory/${category}` })
    }),
    searchProductByName: build.query<null, any>({
      query: (name: any) => ({ method: "GET", url: `laptop/search?q=${name}` })
    }),
    addProduct: build.mutation<any, any>({
      query: (data) => ({
        method: "POST",
        url: "laptop/add",
        data: data
      }),
    }),
    addOrders: build.mutation<any, any>({
      query: (data) => ({ method: "POST", url: "laptop/postorders", data: data }),
    })
  }),
});

export const {
  useGetProductQuery,
  useAddProductMutation,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useSearchProductByNameQuery,
  useAddOrdersMutation
} = productService;
