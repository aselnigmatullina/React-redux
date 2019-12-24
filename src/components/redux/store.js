import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
     _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you',     likes: 0 },
                {id: 2, message: 'It is my first post', likes: 1 },
                {id: 3, message: 'post new',            likes: 2 }
            
            ],
            newPostText: 'frr'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Hellooooo'},
            ],
            dialogs: [
                {id: 1, name: 'Asel' },
                {id: 2, name: 'Asya' },
                {id: 3, name: 'Petya'},
                {id: 4, name: 'Nana' },
            
            ],
            newMessageBody: '' 
        }    
    },
    getState(){
        return this._state;
    },
    _rerenderEntireTree() {console.log('state changed')
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },

    dispatch(action){
        this._state.profilePage  = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage  = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    }
}







export default store;
window.store = store;