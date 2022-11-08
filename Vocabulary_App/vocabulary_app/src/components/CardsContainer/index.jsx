import React, { useContext } from 'react'
import { Context } from '../../context'
import Cards from '../Cards'
import s from './index.module.css'

export default function CardsContainer() {

    const { cards } = useContext(Context);

    return (
        <div className={s.cards_container}>
            {
                cards.map(el => <Cards key={el.id} {...el} />)
            }
        </div>
    )
}
