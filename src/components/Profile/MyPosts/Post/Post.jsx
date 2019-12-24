import React from 'react';
import s from './../Post/Post.module.css';

const Post = (props) => {
    return (
    <div className={s.post}>
        <div className={s.item}>
            <img src='https://sun9-29.userapi.com/c543103/v543103831/40ca9/T2JqGN2UocI.jpg' />
            <div className={s.message}>
             {props.message}
             </div>
            <div>
            <span>♡</span> {props.likes}
            </div>
        </div>
    </div>
    )
}

export default Post;