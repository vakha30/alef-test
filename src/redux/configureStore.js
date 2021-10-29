import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./features/auth";

const rootReducer = combineReducers({ auth });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
