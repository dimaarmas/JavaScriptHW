const defaultState = [];

const ADD_TO_BASKET = 'ADD_TO_BASKET';
const DELETE_BASKET = 'DELETE_BASKET';
const COUNT_INCREMENT = 'COUNT_INCREMENT';
const COUNT_DECREMENT = 'COUNT_DECREMENT';

export const add_to_basket = (payload) => ({ type: ADD_TO_BASKET, payload })
export const removeBasket = () => ({ type: DELETE_BASKET })
export const countIncrement = payload => ({ type: COUNT_INCREMENT, payload })
export const countDecrement = payload => ({ type: COUNT_DECREMENT, payload })

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id); //find element in state
    if (productInState) {
        productInState.count++
        return [...state]
    } else {
        return [...state, { ...payload, count: 1 }]
    }
}


export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_BASKET) {
        return checkProduct(state, action.payload)
    } else if (action.type === DELETE_BASKET) {
        return defaultState
    } else if (action.type === COUNT_INCREMENT) {
        state.find(el => el.id === action.payload).count++;
        return [...state]
    } else if (action.type === COUNT_DECREMENT) {
        const target_card = state.find(el => el.id === action.payload);
        if (target_card.count === 1) {
            state = state.filter(el => el.id !== action.payload)
        } else {
            target_card.count--
        }
        return [...state]
    } else {
        return state
    }

}