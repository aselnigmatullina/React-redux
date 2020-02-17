import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you',     likes: 0 },
        {id: 2, message: 'It is my first post', likes: 1 },
        {id: 3, message: 'post new',            likes: 2 }
    
    ],
};

it('length of posts should be incremented', () => {
    //1.test data
    let action = addPostActionCreator("it");
    //2.action
    let newState = profileReducer(state, action);

    //3.expectation-ожидание
    expect(newState.posts.length).toBe(5);
    expect(newState.posts[2].message).toBe('post new');

})
it('after deleting length of messages should be decrement', () => {
    //1.test data
    let action = deletePost(1);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation-ожидание
    expect(newState.posts.length).toBe(3);
})