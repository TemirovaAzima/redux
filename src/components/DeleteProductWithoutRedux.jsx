import React from 'react'
import {deleteProduct} from "../deleteProduct.js";

const DeleteProductWithoutRedux = () => {
    const handleDelete = ()=>{
        deleteProduct(2)
    }
    return (
        <div>
            <h1>Delete without Redux</h1>
            <button onClick={handleDelete}>Delete Product</button>
        </div>
    )
}
export default DeleteProductWithoutRedux
