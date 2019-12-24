import React from 'react';
import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from './../redux/users-reducer';





let mapStateToProps = (state) => {
    return {
        users          : state.usersPage.users,
        pageSize       : state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage    : state.usersPage.currentPage,
        isFetchings    : state.usersPage.isFetchings,
        followingInProgress: state.usersPage.followingInProgress

    }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//        follow            : (userId)     => dispatch(followAC(userId)),
//        unfollow          : (userId)     => dispatch(unfollowAC(userId)),
//        setUsers          : (users)      => dispatch(setUsersAC(users)),
//        setCurrentPage    : (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
//        toggleIsFetching  : (isFetching) => dispatch(toggleIsFetchingAC(isFetching))

//   }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersAPIComponent)