import React, { useContext } from 'react'
import { Context } from '../../context';
import s from './index.module.css'
import Select from 'react-select'

export default function AddUserForm() {

    const { teams, add_user } = useContext(Context);

    console.log(teams);

    const submit = (event) => {
        event.preventDefault();

        const { name, team } = event.target;
        add_user(name.value, team.value);

        name.value = '';
        team.value = '';
    }

    return (
        <div className={s.user_form_container}>
            <p>Add User</p>
            <form className={s.user_form} onSubmit={submit}>
                <input type="text" name='name' placeholder="Name" />
                <Select options={teams} name='team' />
                <button>Add User</button>
            </form>
        </div>

    )
}
