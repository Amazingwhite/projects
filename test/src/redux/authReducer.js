import { loginAPI } from "../api/api"
const CHECK_DATA = "CHECK_DATA"

let initialState = {
    email: '',
    password: ''
}

export const login = (email, password, remember) => (dispatch) => {
    loginAPI.login(email, password, remember)
        .then(response => {
            if (response.token) {
                console.log(0)
            }
        })
}