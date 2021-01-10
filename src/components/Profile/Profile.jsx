import React from 'react'
import Style from './Profile.module.css'
import Ava from './ProfAva/ProfAva';
import Info from './ProfInfo/ProfInfo';
import Friends from './ProfFriends/Friends';
import PostsContainer from './ProfPosts/ProfPostsContainer';


const Profile = (props) => {
    // let state = props.store.getState()
    return (
        <div className={Style.ProfileWrapper}>
            <Ava photos={props.profile.photos.large}/>
            <Info profile={props.profile}/>
            <PostsContainer store={props.store}/>
            {/* <Friends
                FriendData={state.profilePage.FriendData} /> */}
        </div>
    )
}
export default Profile;