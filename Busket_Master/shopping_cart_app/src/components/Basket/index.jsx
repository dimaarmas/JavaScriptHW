import React from 'react'
import { useSelector } from 'react-redux'
import { removeBasket } from '../../store/reducer/basketReducer'
import { useDispatch } from 'react-redux'
import BasketCards from '../BusketCards'

export default function Basket({ id, title, price }) {

    const state = useSelector(state => state.basket)

    const dispatch = useDispatch();

    const deleteBasket = () => dispatch(removeBasket({ id, title, price }))

    return (
        <div>
            {
                state.length !== 0
                    ? <div>
                        <div>
                            {state.map(el => <BasketCards key={el.id} {...el} />)}
                        </div>
                        <button onClick={deleteBasket}>Clear Basket</button>
                    </div>
                    : ''
            }
        </div>
    )
}
