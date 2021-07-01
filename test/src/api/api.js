import * as axios from "axios";

const instance = axios.create({
    baseUrl: 'https://reqres.in/'
})

export const loginAPI = {

    login(email, password) {
        return instance.post(`api/login`, {email, password})
            .then(response => {
                return response
            })
    },
    logout() {
        return instance.delete(`api/login`)
            .then(responce => {
                return responce.data
            });
    }
}