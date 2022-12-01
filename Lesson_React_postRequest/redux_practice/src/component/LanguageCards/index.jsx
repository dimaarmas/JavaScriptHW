import React from 'react'
import { addCard, changeCard, deleteCard } from '../../store/reducer/languageReducer';
import { useDispatch, useSelector } from 'react-redux';
import LanguageItem from '../LanguageItem';

export default function LanguageCards() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.languages);

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

    const change = (id) => dispatch(changeCard(id));
    const removeCard = (id) => dispatch(deleteCard(id));


    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name='eng' placeholder='EN' />
                <input type="text" name='rus' placeholder='RU' />
                <button>Add</button>
            </form>

            <div>
                {
                    state.map(el => <LanguageItem key={el.id} {...el} change={change} removeCard={removeCard} />)
                }
            </div>
        </div>
    )
}
