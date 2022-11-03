import React, { useContext } from 'react'
import { Context } from '../../context';
import s from './index.module.css'

export default function AddTeamForm() {

    const { add_team } = useContext(Context);

    const submit = (event) => {
        event.preventDefault();

        const { team_name } = event.target;
        add_team(team_name.value);

        team_name.value = '';
    }

    return (
        <div className={s.tem_form_container}>
            <p>Add Team</p>
            <form className={s.team_form} onSubmit={submit}>
                <input type="text" name='team_name' placeholder="Team's name" />
                <button>Add Team</button>
            </form>
        </div>


    )
}
