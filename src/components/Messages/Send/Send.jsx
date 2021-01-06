import React from 'react'
import Style from './Send.module.css'

const Send = (props) => {
    return (
        <div className={Style.Send}>
            <img src={props.ava} alt="" />
            <span className={Style.SenderName}>{props.name}</span>
            <span className={Style.SendMessage}>{props.SendMessage}</span>
        </div>
    )
}

export default Send;
