import React from 'react'
import Style from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    usersID: "1",
                    userAvatar: "https://is.gd/bQ1Wbl",
                    usersFullName: "Максим Белев",
                    lastStatus: "Привет я крутой",
                    location: { city: "Омск", country: "Рас си я" },
                    followed: false,
                },
                {
                    usersID: "2",
                    userAvatar: "https://is.gd/sRpZTV",
                    usersFullName: "Илья Киселев",
                    lastStatus: "Привет я некрутой",
                    location: { city: "Омск", country: "Рас си я" },
                    followed: true,
                },
                {
                    usersID: "3",
                    userAvatar: "https://is.gd/n6J1dK",
                    usersFullName: "Андрей Землянский",
                    lastStatus: "Привет я крутой",
                    location: { city: "Омск", country: "Рас си я" },
                    followed: true,
                },

            ]
        )
    }
    return <div className={Style.usersWrapper}>
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={Style.item}>
                        <div className={Style.userAvatar}>
                            <img src={u.userAvatar} alt="" />
                        </div>
                        <div className={Style.usersInfo}>
                            <a href="#">
                                {u.usersFullName}
                            </a>
                            <span>
                                {u.lastStatus}
                            </span>
                            <span>
                                {u.location.country}
                            </span>
                            <span>
                                {u.location.city}
                            </span>
                        </div>
                        <div className={Style.Button}>
                            {u.followed ?
                                <button className={Style.FollowedButton} onClick={() => { props.onUnFollowed(u.usersID) }}>Followed</button> :
                                <button className={Style.UnFollowedButton} onClick={() => { props.onFollowed(u.usersID) }}>Unfollowed</button>}
                        </div>
                    </div>
                )
            }
        </div> 
    </div>
}

export default Users;