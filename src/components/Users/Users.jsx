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
    return(
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
                                <span>
                                    {/* {u.location.country} */}
                                </span>
                                <span>
                                    {/* {u.location.city} */}
                                </span>
                            </div>
                            <div className={Style.Button}>
                                {u.followed ?
                                    <button className={Style.FollowedButton} onClick={() => { props.onUnfollowed(u.id) }}>followed</button> :
                                    <button className={Style.UnFollowedButton} onClick={() => { props.onfollowed(u.id) }}>Unfollowed</button>}
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                {pages.map(p => <span onClick={(e)=> props.setNewUsers(p)}>{p}</span>)}
                {/* <button onClick={()=>this.setNewUsers}>Загрузить еще</button> */}
            </div>
        </div>
    )
}

export default Users;