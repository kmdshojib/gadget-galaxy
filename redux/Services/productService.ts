import { apiService } from "../api/api";

const productService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<null, null>({
      query: () => ({ method: "GET", url: "laptop/get" }),
    }),
    getProductById: build.query<null, any>({
      query: (id: any) => ({ method: "GET", url: `laptop/getProductById/${id}` })
    }),
    getProductByCategory: build.query<any, any>({
      query: ({ category, page, pageSize }) => ({
        method: "GET",
        url: `laptop/getProductByCategory/${category}?page=${page}&pageSize=${pageSize}`,
      }),
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
    }),
    getOrderList: build.query<any, any>({
      query: (email: any) => ({ method: "GET", url: `laptop/orders/${email}` })
    }),
    getSellerProducts: build.query<null, any>({
      query: (email: any) => ({ method: "GET", url: `laptop/seller_products/${email}` })
    }),
    deleteProducts: build.mutation<any, any>({
      query: (id: any) => ({
        method: "DELETE", url: `laptop/delete/${id}`
      })
    }),
    getFeaturedProduct: build.query<null, null>({
      query: () => ({ method: "GET", url: "/laptop/featured" })
    })
  }),
});

export const {
  useGetProductQuery,
  useAddProductMutation,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useSearchProductByNameQuery,
  useAddOrdersMutation,
  useGetOrderListQuery,
  useGetSellerProductsQuery,
  useDeleteProductsMutation,
  useGetFeaturedProductQuery
} = productService;
