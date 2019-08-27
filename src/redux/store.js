import {createStore} from "redux";
import {reducer} from './reducers';

const store = createStore(reducer, { message: '' });

export default store;