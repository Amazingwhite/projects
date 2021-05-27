import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: '1', message: 'Hi, how are you?', likes: 10 },
                { id: '2', message: 'Hi, its my first post', likes: 20 },
                { id: '3', message: 'Hi, its my second post', likes: 30 }
            ],
            newPostText: 'React JS'
        },
        dialogsPage: {
            messages: [
                { id: '1', message: 'Hi' },
                { id: '2', message: 'Hello' },
                { id: '3', message: 'Hola!' }
            ],

            dialogs: [
                { id: '1', name: 'Andrew' },
                { id: '2', name: 'John' },
                { id: '3', name: 'Nick' }
            ],

            newMessageText: 'React Dialogs JS'

        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;