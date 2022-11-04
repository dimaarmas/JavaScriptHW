import React from 'react'

export default function AddProductForm() {

    const submit = (event) => {
        event.preventDefault()

        const { title, country, price } = event.target;

        console.log(title.value, country.value, price.value);

        title.value = '';
        country.value = '';
        price.value = '';
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name='title' placeholder='Name' />
                <input type="text" name='country' placeholder='Country' />
                <input type="text" name='price' placeholder='Price' />
                <button>Add</button>
            </form>
        </div>
    )
}
