const defaultState = [];

const ADD_PRODUCTS = 'ADD_PRODUCTS';

export const addProducts = payload => ({ type: ADD_PRODUCTS, payload })

export const productReducer = (state = defaultState, action) => {
    if (action.type === ADD_PRODUCTS) {
        return action.payload
    } else {
        return state
    }
}