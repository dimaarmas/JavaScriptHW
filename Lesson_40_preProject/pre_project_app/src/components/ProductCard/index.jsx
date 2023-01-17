import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function ProductCard({ id, title, image, price }) {

    const product_url = `/product/${id}`

    return (
        <div className={s.product_card}>
            <Link to={product_url}>
                <img src={image} alt={title} />
            </Link>
            <p>Title: {title} </p>
            <p>Price: {price} $</p>
            <Link to={product_url}>
                <button>Add to cart</button>
            </Link>
        </div>
    )
}
