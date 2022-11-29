const defaultState = [];

const ADD_CARD = 'ADD_CARD';

export const addCard = (payload) => ({ type: ADD_CARD, payload }) // action

export const languageReducer = (state = defaultState, action) => {
    if (action.type === ADD_CARD) {
        return [...state, {
            id: Date.now(),
            type: 'eng',
            ...action.payload
        }]
    } else {
        return state
    }
}