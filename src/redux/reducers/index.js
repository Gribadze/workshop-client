import {combineReducers} from "redux";
import { messageReducer } from "./message.reducer";
import {usersReducer} from "./users.reducer";

export default combineReducers({
    message: messageReducer,
    users: usersReducer,
});
