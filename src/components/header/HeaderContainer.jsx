import React from 'react'
import Header from './Header'
import { connect } from 'react-redux';
import { isHeaderMenuClick } from "../../redux/HeaderReducer";
import { getUsersData } from "../../redux/AuthReducer";
import { profileAPI } from './../API/API';

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getUsersData()
    }
    render() {
        return (
            <Header profileImage={this.props.profileImage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userID: state.auth.id,
        toggleMenuClick: state.headerPage.toggleMenuClick
    }
}

export default connect(mapStateToProps, {isHeaderMenuClick,getUsersData})(HeaderContainer);