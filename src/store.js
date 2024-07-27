import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import productReducer from "./reducers/productsReducer";
import { thunk } from "redux-thunk";
import logger from 'redux-logger';

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(
    rootReducer,
   applyMiddleware(thunk, logger)
)

export default store;