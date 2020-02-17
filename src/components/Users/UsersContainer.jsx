import React from 'react';
import UsersAPIComponent from './UsersAPIComponent';
import Users from './Users'
import {connect} from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsers} from './../redux/users-reducer';

import Preloader    from '../common/Preloader/Preloader'  ;
import preloader    from './../../assets/images/gif.gif'  ;
import * as axios   from 'axios'                          ;
import { compose } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetchings, getFollowingInProgress, getUsersSuper, getUsersSelector, getUsersSuperSelector } from '../redux/users-selectors';


class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

   }
   render(){
    return <>
    {this.props.isFetching ? <Preloader /> : null }
           <Users totalUsersCount={this.props.totalUsersCount} 
                  pageSize       ={this.props.pageSize} 
                  currentPage    ={this.props.currentPage}
                  onPageChanged  ={this.onPageChanged}
                  users          ={this.props.users}
                  follow         ={this.props.follow}
                  unfollow       ={this.props.unfollow}
                  toggleFollowingProgress={this.props.toggleFollowingProgress}

    />
    </>
}
}




// let mapStateToProps = (state) => {
//     return {
//         users          : state.usersPage.users,
//         pageSize       : state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage    : state.usersPage.currentPage,
//         isFetchings    : state.usersPage.isFetchings,
//         followingInProgress: state.usersPage.followingInProgress

//     }
// }


//селекторы

let mapStateToProps = (state) => {
    return { 
        // users          : getUsers(state),
        users          : getUsersSuperSelector(state),
        pageSize       : getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage    : getCurrentPage(state),
        isFetchings    : getIsFetchings(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers })
)(Users)

