import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { load_all_products } from '../../store/requests/product_request';
import s from './index.module.css'

export default function ProductPage() {

    const { id } = useParams();

    const dispatch = useDispatch();
    const state = useSelector(state => state.products)

    useEffect(() => {
        dispatch(load_all_products(id))
    }, [])

    const { title, description, price, image } = state;


    return (
        <div className={s.product_item}>
            <img src={image} alt={title} />
            <div className={s.info_block}>
                <p className={s.title}>{title}</p>
                <p className={s.description}>{description}</p>

                <div className={s.price_block}>
                    <p><span>Price:</span>{price} $</p>
                    <button>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}
