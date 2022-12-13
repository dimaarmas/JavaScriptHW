import React from 'react'
import { add_to_basket } from '../../store/reducer/basketReducer'
import { useDispatch } from 'react-redux'
import s from './index.module.css'

export default function Product({ id, title, price }) {

    const dispatch = useDispatch();

    const addToBasket = () => dispatch(add_to_basket({ id, title, price }))

    return (
        <div className={s.product_item}>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}
