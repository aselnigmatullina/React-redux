import React from 'react';
import s from './../Header/Header.module.css';
import {NavLink} from 'react-router-dom';




const Header = (props) => {
    return (
        <header className={s.header}>
           <img  />
           <div className={s.loginBlock}>
               {props.isAuth ? props.login :
               <NavLink to={'/login'}><button className={s.btnLogin}>Login</button></NavLink>
               }
           </div>
           <div className={s.title}>social network</div>
           <div className={s.brand}>YourSoul0919</div>
           {/* <div className={s.text}>Самая удобная социальная сеть<br />на React</div> */}


        </header>
    )}
    

export default Header;