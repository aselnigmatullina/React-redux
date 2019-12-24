import React from 'react';
import s from './../MyPosts/MyPosts.module.css';
import Post from './Post/Post';






const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} key={p.id} likes={p.likes} /> )
    let newPostEl = React.createRef();

    let onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
          
    }


    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);

        

    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                <textarea className={s.form} onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
                </div>
                <div>
                <button className={s.buttonForClick} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;