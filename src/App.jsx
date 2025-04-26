import React from 'react'
// import UpdateProduct from "./components/UpdateProduct.jsx";
import DeleteProduct from "./components/DeleteProduct.jsx";
// import Counter from './components/Counter.jsx'
// import AllProducts from "./components/AllProducts.jsx";
// import SpecificProduct from "./components/SpecificProduct.jsx";
// import AddNewProduct from "./components/AddNewProduct.jsx";
const App = () => {
    return (
        <div>
          {/*<AllProducts />*/}
          {/*  <SpecificProduct id={1}/>*/}
          {/*  <AddNewProduct/>*/}
          {/*  <UpdateProduct productId={1}/>*/}
            <DeleteProduct productId={2}/>
        </div>
    )
}
export default App
