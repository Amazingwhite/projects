import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk" 
import appReducer from "./appReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    users: usersReducer,
    profile: profileReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;