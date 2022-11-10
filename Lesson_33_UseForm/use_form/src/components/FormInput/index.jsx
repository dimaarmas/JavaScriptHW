import React from 'react'
import s from './index.module.css'

export default function FormInput(props) {
    return (
        <input className={s.form_input} {...props} />
    )
}
