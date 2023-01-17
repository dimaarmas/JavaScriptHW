import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add_product } from '../../store/requests/products_req'
import ProductCard from '../../components/ProductCard';
import s from './index.module.css'
import { sortProducts } from '../../store/reducers/product';
import { searchPrice } from '../../store/reducers/product';


export default function ProductsPage() {

    const { category } = useParams();
    const dispatch = useDispatch();

    const products = useSelector(state => state.product);
    const category_up = category[0].toUpperCase() + category.slice(1);

    useEffect(() => {
        dispatch(add_product(category))
    }, [])

    console.log(products)

    const order = event => dispatch(sortProducts(event.target.value))
    const search_price = event => {
        event.preventDefault();
        const { min, max } = event.target;
        const min_value = min.value || 0;
        const max_value = max.value || Infinity;
        dispatch(searchPrice({ min_value, max_value }));
    }


    return (
        <div className={s.products_page}>
            <h2>{category_up}</h2>
            <div>
                <div>
                    <select onInput={order}>
                        <option value='default'>Default</option>
                        <option value='title'>title</option>
                        <option value='price'>price</option>
                    </select>
                </div>

                <div>
                    <span>Price:</span>
                    <form onSubmit={search_price} className={s.search_form}>
                        <input type="number" name='min' placeholder='from' />
                        <input type="number" name='max' placeholder='to' />
                        <button>Search</button>
                    </form>
                </div>
            </div>

            <div className={s.products_container}>
                {
                    products
                        .filter(el => !el.hide_mark)
                        .map(el => <ProductCard key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}
