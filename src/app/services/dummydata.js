import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => "/products"
        })
    })
})
// export const {useGetAllProductQuery} = productApi
// without destructing
export const useGetAllProductQuery = productApi.useGetAllProductQuery
