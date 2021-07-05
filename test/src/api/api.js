import * as axios from "axios";

const authInstance = axios.create({
    baseURL: 'https://reqres.in/'
})

export const loginAPI = {
    login(email, password) {
        return authInstance.post(`api/login`, { email, password })
            .then(response => {
                return response
            })
    },
    logout() {
        return authInstance.delete(`api/login`)
            .then(response => {
                return response
            });
    }
}

export const registerAPI = {
    registration(email, password) {
        return authInstance.post(`api/register`, {email, password})
            .then(response => {
                return response
            })
    }
}

export const usersAPI = {
    getUsers(currentPage = 1) {
        return authInstance.get(`/api/users?page=${currentPage}`)
            .then(response => {
                return response
            })
    }
}