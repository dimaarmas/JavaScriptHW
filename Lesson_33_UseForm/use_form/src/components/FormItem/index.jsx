import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'

export default function FormItem({ title, button, infoText, infoText_2, formType }) {
    return (
        <form className={s.form_item}>
            <p className={s.form_title}>{title}</p>

            <p className={s.form_info}>{infoText_2}</p>

            <FormInput
                type='text'
                name='email'
                placeholder='Email'
            />

            {
                ['registration', 'login'].includes(formType)
                    ? <FormInput
                        type='text'
                        name='password'
                        placeholder='Password'
                    />
                    : ''
            }



            <p className={s.form_info}>{infoText}</p>
            <FormButton color='yellow'>{button.submit}</FormButton>

            {
                ['registration', 'login'].includes(formType)
                    ? <FormButton color='white'>{button.redirect}</FormButton>
                    : ''
            }
        </form>
    )
}
