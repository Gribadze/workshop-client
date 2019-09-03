import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from './reducers';

const middlewares = [
    thunkMiddleware,
];
const store = createStore(reducer, { message: '' }, applyMiddleware(...middlewares));

export default store;