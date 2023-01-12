import { loadAllProducts } from "../reducers/products"

export const load_all_products = (id) => {
    return dispatch => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(resp => resp.json())
            .then(json => dispatch(loadAllProducts(json)))
    }

}