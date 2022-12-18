import React from 'react'
import s from './index.module.css'


export default function ProductCard({ title, image, price }) {
    return (
        <div className={s.product_card}>
            <img src={image} alt="product_image" />
            <p>Title: {title}</p>
            <p>Price: {price} €</p>
        </div>
    )
}
