import { loadProducts } from '../reducers/products'

export const load_products = (dispatch) => {
    fetch('https://fakestoreapi.com/products')
        .then(resp => resp.json())
        .then(json => dispatch(loadProducts(json)))
}