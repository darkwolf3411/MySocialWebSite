import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { withAuthRedirect } from './../hoc/witchRedirect';
import { profileAPI } from './API/API';
import Settings from './Settings';
import { setUserProfile, changeProfileData } from './../redux/ProfileReducer';
import PreLoader from './common/PreLoader/PreLoader';

class SettingsContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        profileAPI.getUsersProfile(this.props.userID).then(response => {
            this.props.setUserProfile(response.data)
        })
    }
    render() {
        if (!this.props.profile) {
            return <PreLoader />
        }
        return (
            <Settings {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userID: state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps, { setUserProfile, changeProfileData }),
    withAuthRedirect
)(SettingsContainer)