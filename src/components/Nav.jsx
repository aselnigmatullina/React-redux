import React from 'react'
import s from'./../styles/Nav.module.css'
import {NavLink} from 'react-router-dom'
import musicPng from './../assets/images/2.png'


const Nav = () => {
    return (
        <nav className={s.nav}>
          <div><NavLink to='/profile'  className={`${s.item} ${s.active}`}>Profile </NavLink></div>
          <div><NavLink to='/dialogs'  className={`${s.item} ${s.active}`}>Messages</NavLink></div>
          <div><NavLink to='/news'     className={`${s.item} ${s.active}`}>News    </NavLink></div>
          <div><NavLink to='/music'    className={`${s.item} ${s.active}`}>Music <img className={s.musicPng} src={musicPng}/>   </NavLink></div>
          <div><NavLink to='/settings' className={`${s.item} ${s.active}`}>Settings</NavLink></div>
          <div><NavLink to='/users'    className={`${s.item} ${s.active}`}>Users   </NavLink></div>
          <div><NavLink to='/friends'  className={`${s.item} ${s.active}`}>Friends </NavLink></div>
          




        </nav>
    )
}

export default Nav;