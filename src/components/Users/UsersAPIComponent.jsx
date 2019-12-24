import React        from 'react'                          ;
import * as axios   from 'axios'                          ;
import Users        from './Users'                        ;
import preloader    from './../../assets/images/gif.gif'  ;
import Preloader    from '../common/Preloader/Preloader'  ;
import { getUsers } from '../API/api'                     ;




class UsersAPIComponent extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize)
              .then(data => {
              this.props.toggleIsFetching(false);
              this.props.setUsers(data.items);
              this.props.setTotalUsersCount(data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        getUsers(pageNumber, this.props.pageSize)
             .then(data => {
              this.props.toggleIsFetching(false)
              this.props.setUsers(data.items);
   });
        
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


export default UsersAPIComponent;