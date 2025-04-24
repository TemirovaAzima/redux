import React from 'react'
import {useAddNewProductMutation} from "../app/services/dummydata.js";

const AddNewProduct = () => {
    const [addNewProduct,{data:myData,isError,isLoading}] = useAddNewProductMutation();

    if(isError){
        return <h1>Error</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    const handleProduct = async () =>{
        try{
            const newProductData = {
                id:1,
                title: "Amazing T-Shirt",
                description: "This is one of the best and amazing t-shirt in the market"
            };
            await addNewProduct(newProductData);
        }catch(err){
            console.error("Error adding new product", err)
        }
    };

    return (
        <div>
            <h1>{myData?.id}</h1>
            <h1>{myData?.title}</h1>
            <h1>{myData?.description}</h1>

            <button onClick={handleProduct} disabled={isLoading}>
                Add new product
            </button>
        </div>
    )
}
export default AddNewProduct
