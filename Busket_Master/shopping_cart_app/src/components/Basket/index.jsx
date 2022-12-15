import React from 'react'
import { useSelector } from 'react-redux'
import { deleteBasketCard } from '../../store/reducer/basketReducer'
import { useDispatch } from 'react-redux'
import BasketCards from '../BusketCards'

export default function Basket({ id, title, price }) {

    const state = useSelector(state => state.basket)

    const dispatch = useDispatch();

    const deleteBasket = () => dispatch(deleteBasketCard({ id, title, price }))

    return (
        <div>
            {
                state.length !== 0
                    ? <div>
                        <h1>Basket:</h1>
                        <div>
                            {state.map(el => <BasketCards key={el.id} {...el} />)}
                        </div>
                        <button onClick={deleteBasket}>Clear Basket</button>
                    </div>
                    : ''
            }
            <hr />
            <div>
                <p>
                    Total:
                    {
                        state.reduce((prev, { price, count }) => prev + price * count, 0)
                    }
                </p>
            </div>
        </div>
    )
}
