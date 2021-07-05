import { usersAPI } from "../api/api";
const SET_USERS = "SET_USERS"

let initialState = {
    users: [],
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
    
        default: return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})

export const requestUsers = (currentPage) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage)
            .then(response => {
                dispatch(setUsers(response.data.data))
                return response
            })
    }
}



export default usersReducer;