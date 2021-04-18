import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "7a8c0c51-233f-4823-9819-2a03ade68e5c"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data 
            });
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(responce => {
                return responce.data
            });
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(responce => {
                return responce.data
            });
    }
}

export const profileAPI = {
    showProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(responce => {
                return responce.data
            });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(responce => {
                return responce.data
            });
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(responce => {
                return responce.data
            });
    }
}