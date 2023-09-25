import { apiService } from "../api/api";

const categoryServices = apiService.injectEndpoints({
    endpoints: build => ({
        getCategories: build.query<null, null>({
            query: () => ({ method: "get", url: "categories" })
        })
    })
})
export const { useGetCategoriesQuery } = categoryServices;