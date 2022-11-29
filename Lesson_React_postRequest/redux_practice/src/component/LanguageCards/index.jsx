import React from 'react'
import { addCard } from '../../store/reducer/languageReducer';
import { useDispatch } from 'react-redux';

export default function LanguageCards() {

    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();

        const { eng, rus } = event.target
        dispatch(addCard({
            eng: eng.value,
            rus: rus.value
        }));

        eng.value = '';
        rus.value = '';
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name='eng' placeholder='EN' />
                <input type="text" name='rus' placeholder='RU' />
                <button>Add</button>
            </form>

            <div></div>
        </div>
    )
}
