import React from 'react';
import s from './../MyPosts/MyPosts.module.css';
import Post from './Post/Post';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} key={p.id} likes={p.likes} /> )
    let newPostEl = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);         
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.title}>My posts</h3>
            <AddNewPostRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = () => {
    return(
        <form onSubmit={props.handleChange}>
        <div>
        <Field component={Textarea}
               placeholder={"Post message"}
               name={newPostText} 
               className={s.form} 
               value={props.newPostText}
               validate={[required, maxLength10]}
               
               />
        </div>
        <div>
        <button className={s.buttonForClick}>Add post</button>
        </div>
    </form>
    )
}

const AddNewPostRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;