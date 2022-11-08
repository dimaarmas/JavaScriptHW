import React, { useContext } from 'react'
import { Context } from '../../context'
import s from './index.module.css'

export default function Triggers() {

    const { change_to_de, change_to_rus } = useContext(Context);

    return (
        <div className={s.triggers_container}>
            <button onClick={() => change_to_de()}>Deutsch</button>
            <button onClick={() => change_to_rus()}>Rus</button>
        </div>
    )
}