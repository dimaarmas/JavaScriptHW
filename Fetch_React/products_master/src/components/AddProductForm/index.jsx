import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import s from './index.module.css'
import { Context } from '../../context';
import { addProducts } from '../../requests/products';

export default function AddProductForm() {

    const { createNewProduct } = useContext(Context);

    const { register, handleSubmit } = useForm();

    const submit = data => addProducts(data, createNewProduct);

    const titleRegister = register('title')
    const descriptionRegister = register('description')
    const priceRegister = register('price')

    return (
        <div>
            <form className={s.user_form} onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    name='title'
                    placeholder='Product Title'
                    {...titleRegister}
                />

                <input
                    type="text"
                    name='description'
                    placeholder='Description'
                    {...descriptionRegister}
                />


                <input
                    type="text"
                    name='price'
                    placeholder='Price'
                    {...priceRegister}
                />
                <button>Add Product</button>
            </form>
        </div>
    )
}
