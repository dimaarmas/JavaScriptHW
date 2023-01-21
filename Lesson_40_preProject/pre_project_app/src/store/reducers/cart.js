const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const COUNT_INCREMENT = 'COUNT_INCREMENT';
const COUNT_DECREMENT = 'COUNT_DECREMENT';

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const deleteFromCart = payload => ({ type: DELETE_FROM_CART, payload })
export const countIncrement = payload => ({ type: COUNT_INCREMENT, payload });
export const countDecrement = payload => ({ type: COUNT_DECREMENT, payload });


const checkProduct = (state, payload) => {
    const product_in_state = state.find(el => el.id === payload.id);
    if (product_in_state) {
        product_in_state.count++
        return [...state]
    } else {
        return [...state, { ...payload, count: 1 }]
    }
}

export const cartReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_CART) {
        return checkProduct(state, action.payload)
    } else if (action.type === DELETE_FROM_CART) {
        return defaultState
    } else if (action.type === COUNT_INCREMENT) {
        state.find(el => el.id === action.payload).count++;
        return [...state]
    } else if (action.type === COUNT_DECREMENT) {
        const target_card = state.find(el => el.id === action.payload);
        if (target_card.count === 1) {
            state.filter(el => el.id !== action.payload)
        } else {
            target_card.count--
        }
        return [...state]
    } else {
        return state
    }

}