import { loginAPI } from "../api/api"
import { registerAPI } from "../api/api"
const CHECK_DATA = "CHECK_DATA"
const IS_TOKEN = "IS_TOKEN"

let initialState = {
    email: '',
    password: '',
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case CHECK_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case IS_TOKEN: {
            if (action.token) {
            return  {
                ...state,
                isAuth: true
            }} 
        }
        default: return state;
    }

}

export const setUserData = (email, password, isAuth) => ({ type: CHECK_DATA, payload: { email, password, isAuth } })
export const setIsToken = (token) => ({type: IS_TOKEN, token})

export const login = (email, password) => (dispatch) => {
    return loginAPI.login(email, password)
        .then(response => {
            if (response.status === 200) {
                window.localStorage.setItem('token', response.data.token)
                dispatch(setUserData(email, password, true))
            }
        })
}

export const logout = () => (dispatch) => {
    loginAPI.logout()
        .then(response => {
            if (response.status === 204) {
                window.localStorage.removeItem('token')
                dispatch(setUserData('', '', false))
            }
        })
}

export const registration = (email, password) => (dispatch) => {
    return registerAPI.registration(email, password)
        .then(response => {
            return response
        })
}

export default authReducer;