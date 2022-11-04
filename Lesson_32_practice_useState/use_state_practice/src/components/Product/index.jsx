import React from 'react'

export default function Product({ title, country, price }) {
    return (
        <div>
            <p>Title: {title}</p>
            <p>Country: {country}</p>
            <p>Price: {price}</p>
        </div>
    )
}
