import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducers/categories';
import { productReducer } from './reducers/product';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    category: categoriesReducer,
    product: productReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));