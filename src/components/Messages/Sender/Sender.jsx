import React from 'react'
import Style from './Sender.module.css'
import { NavLink } from 'react-router-dom'


const Sender = (props) => {
    let path = "/Messages/" + props.id
    return(
        <NavLink to={path} className={Style.SenderWrapper}>
           <img src={props.ava} alt=""/>
           <span className={Style.SenderName}>{props.name}</span>
           <span className={Style.SenderLastMess}>{props.lstmess}</span> 
        </NavLink>
    )
}

export default Sender;