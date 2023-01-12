const defaultState = {};

const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';

export const loadAllProducts = payload => ({ type: LOAD_ALL_PRODUCTS, payload })

export const productsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        return action.payload
    } else {
        return state
    }
}