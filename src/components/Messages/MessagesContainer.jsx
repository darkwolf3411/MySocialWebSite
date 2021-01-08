import React from 'react'
import { connect } from 'react-redux';
import { uppdateNewMessageActionCreater, addessageActionCreactor } from '../../redux/MessagesReducer';
import Messages from './Messages';

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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;