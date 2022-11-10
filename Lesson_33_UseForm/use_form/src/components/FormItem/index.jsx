import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'
import { useForm } from 'react-hook-form'

export default function FormItem({ title, button, infoText, infoText_2, formType }) {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

    const submit = (data) => console.log(data)

    const emailRegister = register('email', {
        required: '* Enter your email',
        pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: '*Not valid email format'
        }
    });
    const passwordRegister = register('password', {
        required: '* Enter your password',
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message: '*Your password should have minimum eight characters, at least one letter, one number and one special character'
        }
    });

    return (
        <form className={s.form_item} onSubmit={handleSubmit(submit)}>
            <p className={s.form_title}>{title}</p>

            <p className={s.form_info}>{infoText_2}</p>

            <FormInput
                type='text'
                name='email'
                placeholder='Email'
                {...emailRegister}
            />

            <div className={s.error_message}>
                {errors.email && <p>{errors.email?.message}</p>}
            </div>

            {
                ['registration', 'login'].includes(formType)
                    ? <FormInput
                        type='text'
                        name='password'
                        placeholder='Password'
                        {...passwordRegister}
                    />
                    : ''
            }

            {
                ['registration', 'login'].includes(formType)
                    ? <div className={s.error_message}>
                        {errors.password && <p>{errors.password?.message}</p>}
                    </div>
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
