import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";

//Root Reducer
export default combineReducers({
    users: userDataReducer
});