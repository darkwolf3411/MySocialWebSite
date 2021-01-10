import React from 'react'
import { connect } from 'react-redux';
import { follow, isSerch, setUsers, unfollow, isSerchValue } from '../../redux/UsersReducer';
import Users from './Users';
import * as axios from 'axios'


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.isSerch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=5`)
            .then(response => {
                this.props.isSerch(false)
                this.props.setUsers(response.data.items);
            });
    }

    setNewUsers = (p) => {
        this.props.isSerch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=5`)
            .then(response => {
                this.props.isSerch(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            <Users totalCount={this.props.totalCount}
                users={this.props.users}
                onUnfollowed={this.props.onUnfollowed}
                onfollowed={this.props.onfollowed}
                setNewUsers={this.setNewUsers}
                serchValue={this.props.serchValue} />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalUsersCount,
        serchValue: state.usersPage.isSerch
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         onfollowed: (userID) => {
//             dispatch(followAC(userID))
//         },
//         onUnfollowed: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         isSerchValue: (isSerchValue) => {
//             dispatch(isSerchAC(isSerchValue))
//         }
//     }
// }

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, isSerch, })(UsersContainer);