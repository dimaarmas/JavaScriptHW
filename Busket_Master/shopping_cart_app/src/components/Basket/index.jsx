import React from 'react'
import { useSelector } from 'react-redux'
import BasketCards from '../BusketCards'

export default function Basket() {

    const state = useSelector(state => state.basket)

    return (
        <div>
            {
                state.map(el => <BasketCards key={el.id} {...el} />)
            }
        </div>
    )
}
