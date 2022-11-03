import React from 'react'
import s from './index.module.css'

export default function User({ name, team }) {
    return (
        <div className={s.user_card}>
            <p>{name}</p>
            <p>{team}</p>
        </div>
    )
}
