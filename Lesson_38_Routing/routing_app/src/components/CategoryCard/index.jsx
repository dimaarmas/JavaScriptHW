import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoryCard({ category, prodcuts }) {
    return (

        <div className={s.category_card}>
            <Link>
                {category}
            </Link>
        </div>
    )
}
