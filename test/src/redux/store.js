import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk" 
import appReducer from "./appReducer";

let reducers = combineReducers({
    auth: authReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;