import React from 'react'
import s from './index.module.css'

export default function Triggers({ change_de, change_rus }) {
    return (
        <div className={s.triggers_container}>
            <button onClick={change_de}>Deutsch</button>
            <button onClick={change_rus}>Rus</button>
        </div>
    )
}