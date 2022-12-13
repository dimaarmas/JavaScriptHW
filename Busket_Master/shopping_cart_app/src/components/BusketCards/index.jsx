import React from 'react'
import s from './index.module.css'

export default function BasketCards({ id, title, price, count }) {
    return (
        <div className={s.basket_cards}>
            <p>{title}</p>
            <p>{price}</p>
            <p>{count}</p>
            <div>
                <button>-</button>
                <button>+</button>
            </div>
        </div>

    )
}
