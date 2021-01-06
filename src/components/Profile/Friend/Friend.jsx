import React from 'react'
import Style from './Friend.module.css'
import { NavLink } from 'react-router-dom'

const Friend = (props) => {
    let path = '/friend/' + props.id
    return (
        <NavLink to={path} className={Style.friend}>
            <img src={props.friendAva} alt="" />
            <span>{props.friendName}</span>
        </NavLink>
    )
}
export default Friend;