import { profileAPI } from "../api/api";
const SET_USER = "GET_USER"

let initialState = {
    data: {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        avatar: ""
    }
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                data: action.data
            }
        }
    
        default: return state
    }
}

export const setUser = (data) => ({type: SET_USER, data})

export const requestUser = (userId) => {
    return (dispatch) => {
        profileAPI.getSingleUser(userId)
            .then(response => {
                dispatch(setUser(response.data))
                return response
            })
    }
}

export default profileReducer