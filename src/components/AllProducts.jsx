import React from 'react'
import {useGetAllProductQuery} from "../app/services/dummydata.js";

const AllProducts = () => {
    const {data:myData,isError:fetchError,isLoading:loadingState} = useGetAllProductQuery()

    if(fetchError){
        return <h1>Error</h1>
    }
    if(loadingState){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {myData?.products.map((product) => (
                <h1 key={product.id}>{product.title}</h1>
            ))}
        </div>
    )
}
export default AllProducts
