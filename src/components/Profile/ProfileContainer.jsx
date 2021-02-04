import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile,setNewPrfileImage,updateStatus,
     statusChange, getStatus, reductAccpetChange } from '../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import PreLoader from './../common/PreLoader/PreLoader';
import { profileAPI } from '../API/API';
import { withAuthRedirect } from '../../hoc/witchRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        debugger
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.userID;
            this.props.reductAccpetChange(true)
        }else{
            this.props.reductAccpetChange(false)
        }
        profileAPI.getUsersProfile(userID).then(response => {
            this.props.setUserProfile(response.data)
        });
        this.props.getStatus(userID)
    }
    render() {
        if (!this.props.profile) {
            return <PreLoader />
        }
        return (
            <>
                <Profile {...this.props}
                profile={this.props.profile}
                userID ={this.props.userID}
                profileImage={this.props.profileImage}
                status={this.props.status}
                statusChange={this.props.statusChange}
                reductAccpet={this.props.reductAccpet} />
            </>
        )
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
        statusValue: state.profilePage.statusText,
        profileImage: state.profilePage.profileImage,
        userID: state.auth.id,
        profile: state.profilePage.profile,
        reductAccpet: state.profilePage.reductAccpet        
    }
}
export default compose(
    connect(mapStateToProps, { setUserProfile, setNewPrfileImage,
         updateStatus, statusChange, getStatus, reductAccpetChange }),
    withRouter
)(AuthRedirectComponent)
// let WitchURLDateContainerComponent = withRouter(AuthRedirectComponent);

//  connect(mapStateToProps, { setUserProfile, setNewPrfileImage })(WitchURLDateContainerComponent);