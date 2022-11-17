import React from 'react'
import s from './index.module.css'

export default function Products({ title, description, price }) {
    return (
        <div className={s.products_card}>
            <p>Title: {title}</p>
            <p>Descprition: {description}</p>
            <p>Price: {price}€</p>
        </div>
    )
}
