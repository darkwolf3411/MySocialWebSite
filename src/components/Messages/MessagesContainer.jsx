import React from 'react'
import { connect } from 'react-redux';
import { uppdateNewMessageActionCreater, addessageActionCreactor } from '../../redux/MessagesReducer';
import Messages from './Messages';
import { withAuthRedirect } from './../../hoc/witchRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    
    return {
        SenderDate: state.messagesPage.SenderDate,
        SendsData: state.messagesPage.SendsData,
        newMessage: state.messagesPage.newMessage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: ()=>{
            dispatch(addessageActionCreactor())
        },
        uppdateNewMessage: (mess)=>{
            dispatch(uppdateNewMessageActionCreater(mess))
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)
