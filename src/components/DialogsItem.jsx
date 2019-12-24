import React from 'react'
import s from './../styles/DialogsItem.module.css'
import {NavLink}  from 'react-router-dom'


const DialogsItem = (props) => {
    return(
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/`+ props.id}>{props.name}</NavLink>
         </div>
    )
}

export default DialogsItem;