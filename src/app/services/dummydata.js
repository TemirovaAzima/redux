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
        }),
        addNewProduct: builder.mutation({
            query: (newProduct)=>({
                url:`/products/add`,
                method: "Post",
                headers: {"Content-Type": "application/json"},
                body: newProduct
            })
        })
    })
})
// export const {useGetAllProductQuery,useGetProductByIdQuery} = productApi
// without destructing
export const useGetAllProductQuery = productApi.useGetAllProductQuery
export const useGetProductByIdQuery = productApi.useGetProductByIdQuery
export const useAddNewProductMutation = productApi.useAddNewProductMutation