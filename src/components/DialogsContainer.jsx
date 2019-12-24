import React from 'react'
import s from './../styles/Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogsItem from './DialogsItem'
import Message from './Message'
import { updateNewPostTextActionCreator, updateNewMessageBodyCreator, sendMessageCreator } from './redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../StoreContext'
import {connect} from 'react-redux'



// const DialogsContainer = () => {
    
  
//     return <StoreContext.Consumer>
//     {(store) => {
//             let state            = store.getState().dialogsPage;
//             let onMessageClick   = () => {
//                 store.dispatch(sendMessageCreator());  
//             }
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body))   
//             }

//             return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onMessageClick}
//                     dialogsPage={state}/>
//     }
// }</StoreContext.Consumer>
    
// }

let mapStateToProps = (state) => {
    return {
      dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
       updateNewMessageBody: (body) => {
          dispatch(updateNewMessageBodyCreator(body))           
       },
       sendMessage: () => {
          dispatch(sendMessageCreator());
       }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;