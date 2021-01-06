import React from 'react'
import Style from './Post.module.css'
import { dellPostCreater } from './../../../redux/ProfileReducer';

const Post = (props) => {
    let dellPost = (e) => {
        let id = e.target.id;
        props.dispatch(dellPostCreater(id))
    }
    return (
        <div className={Style.PostWrapper} >
            <img src="https://is.gd/GsAItc" alt="" />
            <span className={Style.PostText}>
                {props.a}
            </span>
            <button onClick={dellPost} id={props.id}></button>
        </div>
    )
}
export default Post;