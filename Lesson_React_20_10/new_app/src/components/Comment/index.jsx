import React from 'react'
import s from './index.module.css'

export default function Comment({ text }) {
    return (
        <div className={s.comment_item}>
            {text}
        </div>
    )
}
