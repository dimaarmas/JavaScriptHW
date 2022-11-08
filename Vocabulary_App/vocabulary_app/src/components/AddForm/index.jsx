import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';



export default function AddForm() {

    const { add_card } = useContext(Context);



    const submit = (event) => {
        event.preventDefault();

        const { rus, de } = event.target;
        add_card(de.value, rus.value);

        de.value = '';
        rus.value = '';
    }

    return (
        <form className={s.add_form} onSubmit={submit}>
            <input type="text" placeholder='Rusisch' name='rus' />
            <input type="text" placeholder='Deutsch' name='de' />
            <button>Add</button>
        </form>
    )
}
