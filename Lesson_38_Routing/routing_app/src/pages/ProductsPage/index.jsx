import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';
import { getProductsByCategory } from '../../requests/products';

export default function ProductsPage() {

    const [products, setProducts] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        getProductsByCategory(category, setProducts);
    }, [])

    console.log(products)

    return (
        products.length === 0
            ? <p>Loading....</p>
            : <div>
                {
                    products.map(el => <ProductCard key={el.id} {...el} />)
                }
            </div>
    )
}
