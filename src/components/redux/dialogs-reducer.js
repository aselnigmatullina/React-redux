const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE            = 'SEND-MESSAGE';

let initialState = {
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


const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                  ...state,
                  newMessageBody: action.body,
             }
        
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                  ...state,
                  newMessageBody: '',
                  messages: [...state.messages, {id: 4, message: body} ]
             }
        
        default: 
             return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body,
    }

}
export default dialogsReducer