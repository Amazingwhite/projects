import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }

        default: return state;
    }

}

export const getAuthUserData = () => (dispatch) => {
    return authAPI.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                let { id, email, login } = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, passowrd, remeberMe) => (dispatch) => {
    authAPI.login(email, passowrd, remeberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.messages.length > 0 ? response.messages[0] : "Some  error";
                dispatch(stopSubmit("login", { _error: message }));
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export default authReducer;