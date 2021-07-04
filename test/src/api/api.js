import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/'
})

export const loginAPI = {

    login(email, password) {
        return instance.post(`api/login`, { email, password })
            .then(response => {
                return response
            })
    },
    logout() {
        return instance.delete(`api/login`)
            .then(response => {
                return response
            });
    }
}

export const registerAPI = {

    registration(email, password) {
        return instance.post(`api/register`, {email, password})
            .then(response => {
                return response
            })
    }
}