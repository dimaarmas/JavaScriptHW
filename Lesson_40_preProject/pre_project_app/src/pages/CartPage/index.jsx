import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartCard from '../../components/CartCard';
import { deleteFromCart } from '../../store/reducers/cart';
import s from './index.module.css'

export default function CartPage() {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    console.log(cart);

    return (
        <div className={s.cart_container}>
            <div>
                {
                    cart.map(el => <CartCard key={el.id} {...el} />)
                }
            </div>

            <div className={s.button_block}>
                <p>
                    <span>Total:</span>
                    {
                        cart.reduce((prev, { price, count }) => prev + price * count, 0)
                    }
                </p>
                <button onClick={() => dispatch(deleteFromCart())}>Cart Clear</button>
            </div>

        </div>
    )
}
