import React from 'react'
import s from './index.module.css'
import { countIncrement, countDecrement } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

export default function CartCard({ id, title, price, image, count }) {
    const dispatch = useDispatch();

    const increment = () => dispatch(countIncrement(id))
    const decrement = () => dispatch(countDecrement(id))

    return (
        <div className={s.cart_card}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{price} x {count} = {price * count}</p>

            <div className={s.triggers}>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div >
    )
}
