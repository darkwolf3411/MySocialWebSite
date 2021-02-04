import React from 'react'
import { connect } from 'react-redux';
import { setNewUsers , unfollowTC, followTC, getUsers } from '../../redux/UsersReducer';
import Users from './Users';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        return <>
            <Users totalCount={this.props.totalCount}
                users={this.props.users}
                followTC={this.props.followTC}
                unfollowTC={this.props.unfollowTC}
                setNewUsers={this.props.setNewUsers}
                serchValue={this.props.serchValue}
                toggleFollowButt={this.props.toggleFollowButt}
                followChoose={this.props.followChoose}
                 />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalUsersCount,
        serchValue: state.usersPage.isSerch,
        toggleFollowButt: state.usersPage.toggleFollowButt,
        followChoose: state.usersPage.followChoose
    }
}
export default connect(mapStateToProps,
    { getUsers, unfollowTC, followTC, setNewUsers })(UsersContainer);