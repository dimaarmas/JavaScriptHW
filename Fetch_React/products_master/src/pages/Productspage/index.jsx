import React from 'react'
import AddProductForm from '../../components/AddProductForm'
import ProductsContainer from '../../components/ProductsContainer'

export default function Products() {
    return (
        <div>
            <h2>Products:</h2>
            <AddProductForm />
            <ProductsContainer />
        </div>
    )
}
