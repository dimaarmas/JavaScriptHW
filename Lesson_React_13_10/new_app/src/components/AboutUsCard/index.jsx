import React from 'react'
import s from './index.module.css'

export default function AboutUsCard({ title, value, link_title, link_url }) {
    return (
        <div className={s.aboutUs_item}>
            <p className={s.progress}>{value}</p>
            <p className={s.title}>{title}</p>
            <a href={link_url}>{link_title}</a>
        </div>
    )
}
