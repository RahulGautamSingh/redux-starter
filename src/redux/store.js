import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import reducer from "./reducers";

const middleware = [thunk, logger];

export const store = createStore(reducer, applyMiddleware(...middleware));