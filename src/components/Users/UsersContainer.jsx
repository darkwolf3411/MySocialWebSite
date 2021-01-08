import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/UsersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onFollowed: (userID) => {
            dispatch(followAC(userID))
        },
        onUnFollowed: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
          dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;