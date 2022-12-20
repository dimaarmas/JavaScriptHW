import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function ProductCard({ id, title, image, price }) {

    const link = `/product/${id}`

    return (
        <Link to={link}>
            <div className={s.product_card}>
                <img src={image} alt="product_image" />
                <p>Title: {title}</p>
                <p>Price: {price}€</p>
            </div>
        </Link>

    )
}
