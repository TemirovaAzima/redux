import React from 'react'
import UpdateProduct from "./components/UpdateProduct.jsx";
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
            <UpdateProduct productId={1}/>
        </div>
    )
}
export default App
