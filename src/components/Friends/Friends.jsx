import React from 'react'
import s from './Friends.module.css'

const Friends = () => {
    return(
        <>
        <div className={s.friendsTitle}>
            Friends
            <button className={s.friendsBtn}>Ok</button>
            <button className={s.friendsBtn}>Ok</button>
            <button className={s.friendsBtn}>Ok</button>

        </div>
        </>
    )
}

export default Friends;