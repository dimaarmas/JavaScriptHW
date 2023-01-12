import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { load_all_products } from '../../store/requests/product_request';

export default function ProductPage() {

    const { id } = useParams();

    const dispatch = useDispatch();
    const state = useSelector(state => state.products)

    useEffect(() => {
        dispatch(load_all_products(id))
    }, [])

    console.log(state);


    return (
        <div>ProductPage {id}</div>
    )
}
