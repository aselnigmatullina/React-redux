import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY' : '7bce12e0-9738-4980-8399-97b8f9830993'
    },
    
});


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
    
}
export const unfollow = (userId) => {
    return instance.delete(`follow/${userId}`)
    .then(response => response.data)  
}

export const follow = (userId) => {
    return instance.post(`follow/${userId}`, {})
    .then(response => response.data)
}




