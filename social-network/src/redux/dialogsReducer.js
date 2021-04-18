const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'Hello' },
        { id: '3', message: 'Hola!' }
    ],

    dialogs: [
        { id: '1', name: 'Andrew' },
        { id: '2', name: 'John' },
        { id: '3', name: 'Nick' }
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };

        default: return state;
    }

}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogsReducer;