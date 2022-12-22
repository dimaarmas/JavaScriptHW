import React from 'react'
import s from './index.module.css'

export default function CategoryCard({ category }) {
    return (
        <div className={['wrapper', s.category_card].join(' ')}>
            {category}
        </div>
    )
}
