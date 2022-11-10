import React, { forwardRef } from 'react'
import s from './index.module.css'

const FormInput = forwardRef((props, ref) => {
    return (
        <input className={s.form_input} {...props} ref={ref} />
    )
})

export default FormInput;
