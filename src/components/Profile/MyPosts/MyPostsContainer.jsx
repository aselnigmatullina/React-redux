import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/profile-reducer'

// import StoreContext from '../StoreContext';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';



// const MyPostsContainer = () => {
//     return (<StoreContext.Consumer>
//     {(store) => {
//             let state = store.getState();
//             let onAddPost = () => {
//                 store.dispatch(addPostActionCreator());       
//             }
//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//                 store.dispatch(action);
                
        
//             }
//             return <MyPosts updateNewPostText={onPostChange} 
//                             addPost={onAddPost} 
//                             posts={state.profilePage.posts} 
//                             newPostText={state.profilePage.newPostText}/>
//         }
//         }
//     </StoreContext.Consumer>
//     )
     
// }


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: ()   => dispatch(addPostActionCreator()),
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;