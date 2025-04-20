import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => "/products"
        }),
        getProductById: builder.query({
            query: (id) =>`/products/${id}`
        })
    })
})
// export const {useGetAllProductQuery,useGetProductByIdQuery} = productApi
// without destructing
export const useGetAllProductQuery = productApi.useGetAllProductQuery
export const useGetProductByIdQuery = productApi.useGetProductByIdQuery