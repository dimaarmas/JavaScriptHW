import React from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducer/productReducer';


export default function AddProductForm() {

    const dispatch = useDispatch();


    const submit = (event) => {
        event.preventDefault();

        const { title, price } = event.target
        dispatch(addProduct({
            title: title.value,
            price: price.value
        }));

        title.value = '';
        price.value = '';
    }



    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name='title' placeholder='Title' />
                <input type="text" name='price' placeholder='Price' />
                <button>Add Product</button>
            </form>
        </div>

    )
}
