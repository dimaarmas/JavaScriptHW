import React from 'react'
import s from './index.module.css'
import { countIncrement, countDecrement } from '../../store/reducer/basketReducer'
import { CloseOutlined } from '@ant-design/icons'
import { removeBasket } from '../../store/reducer/basketReducer'
import { useDispatch } from 'react-redux'

export default function BasketCards({ id, title, price, count }) {

    const dispatch = useDispatch();

    const deleteBasketCard = () => dispatch(removeBasket({ id, title, price, count }))

    const increment = () => dispatch(countIncrement(id));
    const decrement = () => dispatch(countDecrement(id));

    return (
        <div className={s.basket_card}>
            <p>{title}</p>
            <p>{price * count}</p>
            <p>{count}</p>
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                <CloseOutlined className={s.cross_icon} onClick={deleteBasketCard} />
            </div>
        </div>

    )
}
