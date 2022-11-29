import { createStore, combineReducers } from 'redux'
import { productReducer } from './reducer/productReducer';
import { languageReducer } from './reducer/languageReducer';

const rootReducer = combineReducers({
    products: productReducer,
    languages: languageReducer
});

export const store = createStore(rootReducer);