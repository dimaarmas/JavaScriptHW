import React from 'react'
import Product from '../Product'

export default function ProductsContainer({ products }) {
    return (
        <div>
            {
                products.length !== 0
                    ? products.map(el => <Product key={el.id} {...el} />)
                    : 'No products'
            }
        </div>
    )
}
