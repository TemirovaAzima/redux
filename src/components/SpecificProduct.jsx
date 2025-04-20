import React from 'react'
import {useGetProductByIdQuery} from "../app/services/dummydata.js";

const SpecificProduct = (props) => {
    const {data,isError,isLoading} = useGetProductByIdQuery(props.id)
    console.log(data)
    if(isError){
        return <h1>Error</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>{data?.title}</h1>
        </div>
    )
}
export default SpecificProduct
