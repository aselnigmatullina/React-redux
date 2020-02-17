import React        from 'react';
import s            from './../Users/Users.module.css';
import userPhoto    from '../../assets/images/user.png.png';
import {NavLink}    from 'react-router-dom';
import * as axios   from 'axios'                          ;
import { unfollow } from '../API/api';
import { follow }   from '../API/api';
import Paginator from './Paginator';




let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return(
            <div>
                <Paginator currentPage={currentPage} 
                           onPageChanged={onPageChanged} 
                           totalUsersCount={totalUsersCount} 
                           pageSize={pageSize} 
                           />
               {
                   props.users.map(u => <div key={u.id}>
                       <span>
                           <div><NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/></NavLink></div>
                           <div>
                               {u.followed ? 
                               <button disabled={props.followingInProgress} onClick={ () => {
                                   props.toggleFollowingProgress(true)
                                 unfollow(u).then(data => {
                                            if(data.resultCode == 0){
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingProgress(false)
                                    })
                                }}>Unfollow</button>
                                   : <button disabled={props.followingInProgress} onClick={() => 
                                    {   props.toggleFollowingProgress(true)
                                        follow(u)
                                        .then(data => {
                                              if(data.resultCode == 0){
                                                props.follow(u.id)}
                                                props.toggleFollowingProgress(false)
                                              }               
                                        )}

                                    
                                }>Follow</button>}
                               
                            </div>
                       </span>
                       <span>
                           <span>
                               <div>{u.name}</div>
                               <div>{u.status}</div>
                           </span>
                           <span>  
                               <div>{'u.location.country'}</div>
                               <div>{'u.location.city'}   </div>
                           </span>
                       </span>
                   </div>)
               }
            </div>
        )
}
export default Users;