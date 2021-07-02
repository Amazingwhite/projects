const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    isAuth: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isAuth: true
            }
    
        default: return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    dispatch(initializedSuccess)
    // debugger
}

export default appReducer