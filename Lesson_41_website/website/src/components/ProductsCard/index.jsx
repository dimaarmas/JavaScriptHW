import React from 'react'
import s from './index.module.css'

export default function ProductsCard({ id, title, description, img }) {
    return (
        <div>
            <div className={s.img_block}>
                <img src={img} alt="product_img" />
                <p className={s.title}>{title}</p>
                <button className={s.add_cart_btn}>ADD TO CART</button>
            </div>
            <p>{description}</p>
            <button>Learn more</button>
        </div>
    )
}
