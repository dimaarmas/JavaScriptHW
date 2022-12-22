import { loadAllCategories } from "../reducers/categories";

export const load_categories = (dispatch) => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => dispatch(loadAllCategories(json)))
}