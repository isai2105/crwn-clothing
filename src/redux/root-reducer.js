// Root Reducer
// The actual base reducer object that represents all of the state of the app

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});