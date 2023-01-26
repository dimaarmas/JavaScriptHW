import React from 'react'
import { products } from '../../data/products'
import ProductsCard from '../ProductsCard'
import s from './index.module.css'

export default function Products() {
    return (
        <div>
            {
                products.map(el => <ProductsCard key={el.id} {...el} />)
            }
        </div>
    )
}
