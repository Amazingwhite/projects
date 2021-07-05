import { usersAPI } from "../api/api";
const SET_USERS = "SET_USERS"
const SET_PAGES = "SET_PAGES"

let initialState = {
    pagesInfo: {},
    users: [],
    // id: 0,
    // email: "",
    // first_name: "",
    // last_name: "",
    // avatar: ""
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_PAGES: {
            return {
                ...state,
                pagesInfo: action.payload
            }
        }
    
        default: return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setPages = (page, per_page, total, total_pages) => ({type: SET_PAGES, payload: page, per_page, total, total_pages} )

export const requestUsers = (currentPage) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage)
            .then(response => {
                dispatch(setUsers(response.data.data))
                return response
            })
    }
}

export const requestPages = (currentPage) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage)
            .then(response => {
                delete response.data["data"]
                dispatch(setPages(response.data))
                return response
            })
    }
}

export default usersReducer;