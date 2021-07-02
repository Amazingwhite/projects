import { loginAPI } from "../api/api"
const CHECK_DATA = "CHECK_DATA"

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

        default: return state;
    }

}

export const setUserData = (email, password, isAuth) => ({ type: CHECK_DATA, payload: { email, password, isAuth } })

export const login = (email, password) => (dispatch) => {
    return loginAPI.login(email, password)
        .then(response => {
            if (response.status === 200) {
                // debugger
                dispatch(setUserData(email, password, true))
            }
        })
}

export const logout = () => (dispatch) => {
    loginAPI.logout()
        .then(response => {
            if (response.status === 204) {
                dispatch(setUserData('', '', false))
            }
        })
}

export default authReducer;