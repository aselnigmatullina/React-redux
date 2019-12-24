import React from 'react'
import s from './../styles/Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogsItem from './DialogsItem'
import Message from './Message'
import { updateNewPostTextActionCreator, updateNewMessageBodyCreator, sendMessageCreator } from './redux/dialogs-reducer'



const Dialogs = (props) => {
    let state            = props.dialogsPage;
    let dialogsElements  = state.dialogs.map(d  => <DialogsItem name={d.name}     key={d.id}    id = {d.id}   /> )
    let messagesElements = state.messages.map(m => <Message message ={m.message}  key={m.id}    id = {m.id}   /> )
    let newMessageBody   = state.newMessageBody;
    let onMessageClick = () => {
        props.sendMessage();
        // props.store.dispatch(sendMessageCreator());

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.store.dispatch(updateNewMessageBodyCreator(body))

    }
    return(
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
                 
           </div>

           <div className={s.messages}>
               <div><h2 className={s.titleForMessages}>Messages</h2></div>
             <div> {messagesElements} </div>
             <div>
                 <div><textarea className={s.textarea} value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                 <div className={s.helperToDoCenter}><button className={s.btn} onClick={onMessageClick}>Send</button></div>
             </div>         

        </div>
        </div>

    )
}

export default Dialogs;