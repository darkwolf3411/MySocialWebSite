import React from 'react'
import Style from './Profile.module.css'
import Ava from './ProfAva/ProfAva';
import Info from './ProfInfo/ProfInfo';
import Friends from './ProfFriends/Friends';
import PostsContainer from './ProfPosts/ProfPostsContainer';
import PreLoader from './../common/PreLoader/PreLoader';


const Profile = (props) => {
    return (
        <div className={Style.ProfileWrapper}>
            <Ava photos={props.profile.photos.large}
                userID ={props.userID}
                isFollow={props.isFollow}
                followTC={props.followTC}
                unfollowTC={props.unfollowTC}
                reductAccpet={props.reductAccpet}
                profileImage={props.profileImage}
                setNewPrfileImage={props.setNewPrfileImage} />
            <Info profile={props.profile}
                status={props.status}
                reductAccpet={props.reductAccpet}
                userID={props.userID}
                updateStatus={props.updateStatus}
                statusChange={props.statusChange}
                statusValue={props.statusValue} />
            <PostsContainer store={props.store} />
            {/* <Friends
                FriendData={state.profilePage.FriendData} /> */}
        </div>
    )
}
export default Profile;