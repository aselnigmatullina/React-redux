const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you',     likes: 0 },
        {id: 2, message: 'It is my first post', likes: 1 },
        {id: 3, message: 'post new',            likes: 2 }
    
    ],
    profile    : null,
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5, 
                message: action.newPostText,
                likesCount: 0
        }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,

            }
        
        default: 
             return state;
    }
    

}

export const addPostActionCreator = (newPostText) => ({type: 'ADD-POST', newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer