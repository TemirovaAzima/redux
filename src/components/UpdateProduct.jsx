import React from 'react'
import {useUpdateNewProductMutation} from "../app/services/dummydata.js";

const UpdateProduct = ({productId}) => {
    const [updateProduct,{data,isError,isLoading}] = useUpdateNewProductMutation()

    if(isError){
        return <h1> {isError}</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    const handleUpdateProduct = async ()=>{
        try{
            const updatedProductData= {
                title: "Title updated",
            };

            await updateProduct({
                id: productId,
                updatedProduct: updatedProductData,
            })
        }catch(err){
            console.error("Error updating product", err);
        }
    }
    return (
        <div>
            <h1>{data?.title}</h1>
            <button onClick={handleUpdateProduct} disabled={isLoading}>
                Update Product
            </button>
        </div>
    )
}
export default UpdateProduct
