import React from 'react'
import s from './index.module.css'

export default function ProductCard({ id, image, title, price }) {
    return (
        <div className={s.productCard}>
            <img src={image} alt={title} />
            <p>Title: {title}</p>
            <p>Price: {price}</p>
        </div>
    )
}
