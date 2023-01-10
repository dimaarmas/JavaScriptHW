import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add_product } from '../../store/requests/products_req'
import ProductCard from '../../components/ProductCard';
import s from './index.module.css'


export default function ProductsPage() {

    const { category } = useParams();
    const dispatch = useDispatch();

    const products = useSelector(state => state.product);
    const category_up = category[0].toUpperCase() + category.slice(1);

    useEffect(() => {
        dispatch(add_product(category))
    }, [])

    console.log(products)

    return (
        <div className={s.products_page}>
            <h2>{category_up}</h2>
            <div className={s.products_container}>
                {
                    products.map(el => <ProductCard key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}
