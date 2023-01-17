import { addProducts } from "../reducers/product";

export const add_product = (category) => {
    return dispatch => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(resp => resp.json())
            .then(json => {
                const payload = json.map(el => ({
                    ...el,
                    hide_mark: false
                }))
                dispatch(addProducts(payload))
            })
    }
}