import { addProducts } from "../reducers/product";

export const add_product = (category) => {
    return dispatch => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(resp => resp.json())
            .then(json => dispatch(addProducts(json)))
    }

}