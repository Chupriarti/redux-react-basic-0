import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducer.";

const rootReducer = combineReducer({
    repos: reposReducer
});
