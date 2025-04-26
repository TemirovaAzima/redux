import React, {useEffect, useState} from 'react'
import {updateProductWithoutRedux} from "../updateProductWithoutRedux.js"

const UpdateProductWithoutRedux = () => {
    const [products, setProducts] = useState([])
    const handleClick = () => {
        updateProductWithoutRedux({
            id: 2,
            updatedProduct: {title: "Updated from Js"},
        });
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await updateProductWithoutRedux({
                    id: 2,
                    updatedProduct: {title: "Updated from Js"},
                })
                setProducts(result)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Update without Redux!</h1>
            <p>
                {products.title}
                {products.description}
            </p>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}
export default UpdateProductWithoutRedux
