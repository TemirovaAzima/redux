import React from 'react'
import {useAddNewProductMutation} from "../app/services/dummydata.js";


const AddNewProduct = () => {
    const mutationResult = useAddNewProductMutation();

    const updateProduct = mutationResult[0];
    const resultState = mutationResult[1];

    if(resultState.isError){
        return <h1>Error</h1>
    }

    if(resultState.isLoading){
        return <h1>Loading...</h1>
    }

    const handleProduct = async () =>{
        try{
            const newProductData= {
                id:1,
                title: "Amazing T-Shirt",
                description: "This is one of the best and amazing t-shirt in the market"
            };
            await updateProduct(newProductData);
        }catch(err){
            console.error("Error adding new product", err)
        }
    };

    return (
        <div>
            <h1>{resultState?.data?.id}</h1>
            <h1>{resultState?.data?.title}</h1>
            <h1>{resultState?.data?.description}</h1>

            <button onClick={handleProduct} disabled={resultState.isLoading}>
                Add new product
            </button>
        </div>
    )
}
export default AddNewProduct
