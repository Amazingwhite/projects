import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/'
})

export const loginAPI = {

    login(email, password) {
        return instance.post(`api/login`, {email, password})
            .then(response => {
                
                console.log(response)
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