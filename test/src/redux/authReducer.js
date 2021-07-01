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

export const login = (email, password, isAuth) => (dispatch) => {
    loginAPI.login(email, password)
        .then(response => {
            if(response.token) {
                dispatch(setUserData(email, password, true))
            }
        })
}
export default authReducer;