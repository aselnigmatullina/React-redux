import React from 'react';
import s from './../ProfileInfo/ProfileInfo.module.css'  ;
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';



const ProfileInfo = (props) => {
    if(!props.profile){
        return <img src="" alt=""/>
    }
    return(
        <div className={s.profileBox}>
         <div>
          <img className={s.img} src='https://sun9-20.userapi.com/c543103/v543103831/40ca0/BRL0fD7tYIw.jpg' width='500'/>
         </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />

            <ProfileStatusWithHooks />
          
        <div className={s.сollage}>
        <img className={s.collageImg} src='https://sun9-11.userapi.com/c543103/v543103831/40c85/k7YHj4wZpZk.jpg' alt="" width='200'/>
        <img className={s.collageImg} src='https://sun9-20.userapi.com/c543103/v543103831/40ca0/BRL0fD7tYIw.jpg' alt="" width='200'/>
        <img className={s.collageImg} src='https://sun9-10.userapi.com/c543103/v543103831/40c97/5SMnZQl2LPw.jpg' alt="" width='200'/>
        <img className={s.collageImg} src='https://sun9-29.userapi.com/c543103/v543103831/40c7c/MQg4anI5mPc.jpg' alt="" width='200'/>
        </div>
        </div>
        </div>
    
    )
}

export default ProfileInfo;