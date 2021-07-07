import * as axios from "axios";

console.log(process.env)

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`
})

export const loginAPI = {
    login(email, password) {
        return instance.post(`${process.env.REACT_APP_LOGIN_URL}`, { email, password })
            .then(response => {
                return response
            })
    },
    logout() {
        return instance.delete(`${process.env.REACT_APP_LOGIN_URL}`)
            .then(response => {
                return response
            });
    }
}

export const registerAPI = {
    registration(email, password) {
        return instance.post(`${process.env.REACT_APP_REGISTER_URL}`, {email, password})
            .then(response => {
                return response
            })
    }
}

export const usersAPI = {
    getUsers(currentPage = 1) {
        return instance.get(`${process.env.REACT_APP_USERS_URL}?page=${currentPage}`)
            .then(response => {
                return response
            })
    }
}

export const profileAPI ={
    getSingleUser(userId) {
        return instance.get(`${process.env.REACT_APP_USERS_URL}/${userId}`)
            .then(response => {
                return response
            })
    }
}