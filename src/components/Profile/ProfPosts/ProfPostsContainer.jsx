import React from 'react'
import { addPostActionCreactor, uppdatePostTextActionCreater } from '../../../redux/ProfileReducer';
import Posts from './ProfPosts';
import StoreContext from './../../../StoreContext';


const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let OnAddPost = () => {
                        store.dispatch(addPostActionCreactor())
                    }
                    let onPostChang = (text) => {
                        store.dispatch(uppdatePostTextActionCreater(text));
                    }
                    return <Posts
                        uppdatePost={onPostChang}
                        addPost={OnAddPost}
                        PostDate={store.getState().profilePage.PostDate}
                        newPostText={store.getState().profilePage.newPostText}
                        dispatch={store.dispatch}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;