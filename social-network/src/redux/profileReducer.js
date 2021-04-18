import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: '1', message: 'Hi, how are you?', likes: 10 },
        { id: '2', message: 'Hi, its my first post', likes: 20 },
        { id: '3', message: 'Hi, its my second post', likes: 30 }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.showProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(responce => {
                dispatch(setStatus(responce.data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export default profileReducer;