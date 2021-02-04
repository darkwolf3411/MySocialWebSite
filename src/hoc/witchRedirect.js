import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) =>({
    isAuth: state.auth.isAuth
})
export const withAuthRedirect = (Component) => {
    class RredirectComponent extends React.Component {
        render() {
            // if (!this.props.isAuth) return <Redirect to={"/Login"} />

            return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RredirectComponent)

    return ConnectedAuthRedirectComponent
}

