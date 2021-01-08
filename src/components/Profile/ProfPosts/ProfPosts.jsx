import React from 'react'
import Style from './ProfPosts.module.css'
import Post from './../Post/Post';

const Posts = (props) => {
    
    let OnAddPost = () => {   
        props.addPost()
    }
    let onPostChang = (e) => {
        let text = e.target.value;
        props.uppdatePost(text)
    }
    let PostSplit = props.PostDate.map(con => <Post dispatch={props.dispatch} key={con.id} a={con.m} id={con.id}/>)
    return (
        <div className={Style.Posts}>
            <div className={Style.CreatePost}>
                <textarea
                    onChange={onPostChang}
                    value={props.newPostText} />
                <a className={Style.butt}
                    onClick={OnAddPost}>Опубликовать</a>
            </div>
            <div className={Style.PostWrapper}>
                <div>{PostSplit}</div>
            </div>
        </div>
    )
}

export default Posts;