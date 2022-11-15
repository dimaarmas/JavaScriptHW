import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => console.log(data)

    const firstNameRegister = register('firstname', {
        required: '*Enter your First Name',
        pattern: {
            value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            message: 'Valid name given.'
        }
    })

    const lastNameRegister = register('lasttname', {
        required: '*Enter your Last Name',
        pattern: {
            value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            message: 'Valid name given.'
        }
    })

    const ageRegister = register('age', {
        required: '*Enter your Age',
        pattern: {
            value: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
            message: 'Valid name given.'
        }
    })



    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    name='firstname'
                    placeholder='First Name'
                    {...firstNameRegister} />
                <input
                    type="text"
                    name='lastname'
                    placeholder='Last Name'
                    {...lastNameRegister} />
                <input
                    type="text"
                    name='age'
                    placeholder='Age'
                    {...ageRegister} />
                <button>Send</button>
            </form>

            <div>
                <div>
                    {errors?.firstname && <p>{errors.firstname?.message}</p>}
                </div>

                <div>
                    {errors?.lastname && <p>{errors.lastname?.message}</p>}
                </div>

                <div>
                    {errors?.age && <p>{errors.age?.message}</p>}
                </div>
            </div>
        </div>

    )
}
