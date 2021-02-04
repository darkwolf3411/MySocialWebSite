import React from 'react'
import Style from './Users.module.css'
import userPhoto from './../../assets/images/userPhoto.png'
import PreLoader from './../common/PreLoader/PreLoader';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pages = [];
    for (let i = 1; i <= props.totalCount; i++) {
        pages.push(i)
    }
    return (
        <div className={Style.usersWrapper}>
            {props.serchValue ? <PreLoader /> : null}
            <div>
                {
                    props.users.map(u =>
                        <div key={u.id} className={Style.item}>
                            <div className={Style.userAvatar}>
                                <img src={u.photos.small || userPhoto} alt="" />
                            </div>
                            <div className={Style.usersInfo}>
                                <NavLink to={"/Profile/" + u.id}>
                                    {u.name}
                                </NavLink>
                                <span>
                                    {u.status}
                                </span>
                            </div>
                            <div className={Style.Button}>
                                {u.followed ?
                                    <button disabled={props.followChoose.some(e => e === u.id)}
                                        className={Style.FollowedButton} onClick={() => {
                                            
                                            props.unfollowTC(u.id)
                                        }}>followed</button> :
                                    <button disabled={props.followChoose.some(e => e === u.id)}
                                        className={Style.UnFollowedButton} onClick={() => {
                                            props.followTC(u.id)
                                        }}>Unfollowed</button>}
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                {pages.map(p => <span onClick={(e) => props.setNewUsers(p)}>{p}</span>)}
            </div>
        </div>
    )
}

export default Users;