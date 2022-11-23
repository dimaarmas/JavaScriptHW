import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import s from './index.module.css'
import { addUser } from '../../requests/users';
import { Context } from '../../context';

export default function AddUserForm() {

    const { createNewUser } = useContext(Context)

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

    const submit = data => addUser(data, createNewUser);

    const firstnameRegister = register('firstName', {
        required: '*Field firstname is required'
    });

    const lastnameRegister = register('lastName', {
        required: '*Field lastname is required'
    });

    const ageRegister = register('age', {
        required: '*Field age is required'
    });

    return (
        <div>
            <form className={s.user_form} onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    name='fistName'
                    placeholder='first name'
                    {...firstnameRegister}
                />

                <input
                    type="text"
                    name='lastName'
                    placeholder='last name'
                    {...lastnameRegister}
                />

                <input
                    type="text"
                    name='age'
                    placeholder='age'
                    {...ageRegister}
                />
                <button>Add User</button>
            </form>
            <div>

                <div>
                    {errors?.firstname && <p>{errors.firstName?.message}</p>}
                </div>

                <div>
                    {errors?.lastname && <p>{errors.lastName?.message}</p>}
                </div>

                <div>
                    {errors?.age && <p>{errors.age?.message}</p>}
                </div>
            </div>
        </div>




    )
}
