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
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: newProduct
            }),
        }),
        updateProduct: builder.mutation({
            query: (args) =>({
                url: `/products/${args.id}`,
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: args.updatedProduct
            })
        }),
        deleteProduct: builder.mutation({
            query: (id)=>({
                url: `/products/${id}`,
                method: "DELETE"
            })
        })
    })
})
// export const {useGetAllProductQuery,useGetProductByIdQuery} = productApi
// without destructing
export const useGetAllProductQuery = productApi.useGetAllProductQuery
export const useGetProductByIdQuery = productApi.useGetProductByIdQuery
export const useAddNewProductMutation = productApi.useAddNewProductMutation
export const useUpdateNewProductMutation = productApi.useUpdateProductMutation
export const useDeleteProductMutation = productApi.useDeleteProductMutation