import React from 'react'
import s from './index.module.css'

export default function AddPostForm() {

    const submit = (event) => {
        event.preventDefault();

        const { title, content } = event.target;
        console.log(title.value, content.value);

        title.value = '';
        content.value = '';
    }


    return (
        <form className={s.post_form} onSubmit={submit}>
            <input type="text" name='title' placeholder='Your Title' />
            <input type="text" name='content' placeholder='Your Text' />
            <button>Add Post</button>
        </form>
    )
}
