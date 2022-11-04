import React from "react";
import AddProductForm from "../AddProductForm";
import ProductsContainer from '../ProductsContainer'
import { useState } from 'react'
// import Counter from '../Counter'

function App() {

  const products_info = [
    {
      id: 1,
      title: 'iMac',
      country: 'Germany',
      price: 500
    },

    {
      id: 2,
      title: 'iPhone',
      country: 'USA',
      price: 1000
    }
  ]

  const [products, setProducts] = useState(products_info);




  return (
    <div>
      <AddProductForm />
      <ProductsContainer products={products} />
    </div>
  );
}

export default App;
