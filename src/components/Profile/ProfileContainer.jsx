import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setUserProfile } from '../../redux/ProfileReducer';
import PreLoader from '../common/PreLoader/PreLoader';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }
    render(){
        if (!this.props.profile) {
             return <PreLoader />
        }
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);