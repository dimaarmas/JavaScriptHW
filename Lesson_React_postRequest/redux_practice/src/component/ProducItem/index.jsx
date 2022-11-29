import React from 'react'

export default function ProductItem({ id, title, price, removeProduct }) {
    return (
        <div onClick={() => removeProduct(id)}>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
        </div>
    )
}
