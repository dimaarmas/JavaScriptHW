import React from 'react'
import s from './index.module.css'

export default function Users({ firstName, lastName, age }) {
    return (
        <div className={s.users_cards}>
            <p>First Name:{firstName}</p>
            <p>Last Name:{lastName}</p>
            <p>age:{age}</p>
        </div>
    )
}
