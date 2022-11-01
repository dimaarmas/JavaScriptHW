import React from 'react'
import s from './index.module.css'
import Select from 'react-select'

export default function AddUserForm({ teams }) {

    console.log(teams);

    return (
        <div className={s.user_form_container}>
            <p>Add User</p>
            <form className={s.user_form}>
                <input type="text" name='user_name' placeholder="Name" />
                <Select options={teams} />
                <button>Add User</button>
            </form>
        </div>

    )
}
