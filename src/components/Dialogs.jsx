import React from 'react'
import s from './../styles/Dialogs.module.css'
import DialogsItem from './DialogsItem'
import Message from './Message'
import { Textarea } from './common/FormsControls/FormsControls'
import { maxLengthCreator } from '../utils/validators/validators'



const Dialogs = (props) => {
    let state            = props.dialogsPage;
    let dialogsElements  = state.dialogs.map(d  => <DialogsItem name={d.name}     key={d.id}    id = {d.id}   /> )
    let messagesElements = state.messages.map(m => <Message message ={m.message}  key={m.id}    id = {m.id}   /> )
    let newMessageBody   = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
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
              <AddMessageFormRedux onSubmit={addNewMessage} />
             </div>         

        </div>
        </div>

    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                       name="newMessageBody" 
                       placeholder="Enter your message" 
                       className={s.textarea}
                       validate={[required, maxLength50]}
                       
                       
                       />
            </div>

            <div className={s.helperToDoCenter}>

                <button className={s.btn} >Send</button></div>
       </form>
    )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;