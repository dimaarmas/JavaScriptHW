import React from 'react'
import s from './index.module.css'

export default function AddPostForm({ add_post }) {

    const submit = (event) => {
        event.preventDefault();

        const { title, text } = event.target;
        add_post(title.value, text.value);

        title.value = '';
        text.value = '';
    }


    return (
        <form className={s.post_form} onSubmit={submit}>
            <input type="text" name='title' placeholder='Your Title' />
            <input type="text" name='text' placeholder='Your Text' />
            <button>Add Post</button>
        </form>
    )
}
