import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { load_all_products } from '../../store/requests/product_request';
import { addToCart } from '../../store/reducers/cart';
import s from './index.module.css'

export default function ProductPage() {

    const { id } = useParams();
    const add_to_cart = () => dispatch(addToCart({ id: product_id, title, image, price }));

    const dispatch = useDispatch();
    const state = useSelector(state => state.products)

    useEffect(() => {
        dispatch(load_all_products(id))
    }, [])

    const { title, description, price, image } = state;
    const product_id = state.id;


    return (
        <div className={s.product_item}>
            <img src={image} alt={title} />
            <div className={s.info_block}>
                <p className={s.title}>{title}</p>
                <p className={s.description}>{description}</p>

                <div className={s.price_block}>
                    <p><span>Price:</span>{price} $</p>
                    <button onClick={add_to_cart}>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}
