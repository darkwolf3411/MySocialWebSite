import * as axios from 'axios'
import React from 'react'
import Style from './Users.module.css'
import userPhoto from './../../assets/images/userPhoto.png'


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }
    render() {
        return <div className={Style.usersWrapper}>
            <div>
                {
                    this.props.users.map(u =>
                        <div key={u.id} className={Style.item}>
                            <div className={Style.userAvatar}>
                                <img src={u.photos.small || userPhoto} alt="" />
                            </div>
                            <div className={Style.usersInfo}>
                                <a href="#">
                                    {u.name}
                                </a>
                                <span>
                                    {u.status}
                                </span>
                                <span>
                                    {/* {u.location.country} */}
                                </span>
                                <span>
                                    {/* {u.location.city} */}
                                </span>
                            </div>
                            <div className={Style.Button}>
                                {u.followed ?
                                    <button className={Style.FollowedButton} onClick={() => { this.props.onUnfollowed(u.id) }}>followed</button> :
                                    <button className={Style.UnFollowedButton} onClick={() => { this.props.onfollowed(u.id) }}>Unfollowed</button>}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    }
}


export default Users;