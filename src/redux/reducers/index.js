import { combineReducers } from "redux";
import {userReducer , selectedUserReducer  } from "./userReducer";

const reducers = combineReducers({
    allUsers: userReducer,
    user: selectedUserReducer,
});
 export default reducers;