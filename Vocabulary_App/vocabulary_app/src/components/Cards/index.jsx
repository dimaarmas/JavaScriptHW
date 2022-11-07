import React from 'react'
import s from './index.module.css'


export default function Card({ id, de, rus, lang, change_lang, removeElement }) {
    const text = lang === 'rus' ? rus : de;

    const card_style = {
        backgroundColor: lang === 'rus' ? 'white' : '#2980b9',
        color: lang === 'rus' ? '#2980b9' : 'white'
    }


    return (
        <div className={s.card_item} style={card_style} onClick={() => change_lang(id)}>
            {text}
        </div>
    )
}
