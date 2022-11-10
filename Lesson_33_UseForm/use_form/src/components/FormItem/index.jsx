import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'

export default function FormItem() {
    return (
        <form className={s.form_item}>
            <p className={s.form_title}>Registration</p>
            <FormInput
                type='text'
                name='email'
                placeholder='Email'
            />

            <FormInput
                type='text'
                name='password'
                placeholder='Password'
            />

            <p className={s.form_info}>By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.</p>
            <FormButton color='yellow'>Registration</FormButton>
            <FormButton color='white'>Login</FormButton>
        </form>
    )
}
