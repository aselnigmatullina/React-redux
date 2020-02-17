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
    
}


const dialogsReducer = (state = initialState, action) => {
    switch(action.type){       
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                  ...state,
                  messages: [...state.messages, {id: 4, message: body} ]
             }
        
        default: 
             return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer