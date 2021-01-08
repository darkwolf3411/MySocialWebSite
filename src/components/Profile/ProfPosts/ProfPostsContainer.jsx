import React from 'react'
import { addPostActionCreactor, uppdatePostTextActionCreater } from '../../../redux/ProfileReducer';
import Posts from './ProfPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        PostDate: state.profilePage.PostDate,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        uppdatePost: (text) =>{
            dispatch(uppdatePostTextActionCreater(text))
        },
        addPost: () => {
            dispatch(addPostActionCreactor())
        },
        dispatch: dispatch
    }
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)

export default PostsContainer;