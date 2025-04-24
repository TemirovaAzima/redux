import React from 'react'
import {useUpdateNewProductMutation} from "../app/services/dummydata.js";

const UpdateProduct = ({productId}) => {
    const mutationProduct = useUpdateNewProductMutation()

    const updateProduct = mutationProduct[0];
    const resultState = mutationProduct[1];

    if(resultState.isError){
        return <h1> {resultState.isError}</h1>
    }
    if(resultState.isLoading){
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
            <h1>{resultState.data?.title}</h1>
            <button onClick={handleUpdateProduct} disabled={resultState.isLoading}>
                Update Product
            </button>
        </div>
    )
}
export default UpdateProduct
