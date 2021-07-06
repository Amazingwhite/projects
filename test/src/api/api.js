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

export const usersAPI = {
    getUsers(currentPage = 1) {
        return instance.get(`/api/users?page=${currentPage}`)
            .then(response => {
                return response
            })
    }
}

export const profileAPI ={
    getSingleUser(userId) {
        return instance.get(`/api/users/${userId}`)
            .then(response => {
                return response
            })
    }
}