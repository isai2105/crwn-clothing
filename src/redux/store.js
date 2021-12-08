// middlewares are the part between the action and the Redux reducer
import { createStore,  applyMiddleware } from "redux";
import logger from "redux-logger"; // this is a middleware


import rootReducer from "./root-reducer";

// we do it this way so adding another middleware is easier
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;