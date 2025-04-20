import React from 'react'
import {useGetAllProductQuery} from "../app/services/dummydata.js";

const AllProducts = () => {
    const response = useGetAllProductQuery()
    console.log(response)
    if(response.isError){
        return <h1>Error</h1>
    }
    if(response.isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {response.data?.products.map((product) => (
                <h1 key={product.id}>{product.title}</h1>
            ))}
        </div>
    )
}
export default AllProducts
