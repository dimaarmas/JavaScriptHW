import React from 'react'
import Cards from '../Cards'
import s from './index.module.css'

export default function CardsContainer({ card_words, change_lang }) {
    return (
        <div className={s.cards_container}>
            {
                card_words.map(el => <Cards key={el.id} {...el} change_lang={change_lang} />)
            }
        </div>
    )
}
