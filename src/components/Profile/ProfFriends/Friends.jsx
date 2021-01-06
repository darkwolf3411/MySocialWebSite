import React from 'react'
import Style from './Friends.module.css'
import Friend from './../Friend/Friend';


const Friends = (props) => {
    let FriendEl = props.FriendData.map(a => <Friend friendAva={a.friendAva} friendName={a.friendName} id={a.id}/>)
    return (
        <div className={Style.friends}>
            <span>Друзья</span>
            <div>{FriendEl}</div>
        </div>
    )
}
export default Friends;