import React from 'react'
import { uppdateNewMessageActionCreater, addessageActionCreactor } from '../../redux/MessagesReducer';
import Messages from './Messages';
import StoreContext from './../../StoreContext';


const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addMessage = () => {
                        store.dispatch(addessageActionCreactor());
                    }
                    let updateMess = (mess) => {
                        store.dispatch(uppdateNewMessageActionCreater(mess))
                    }
                    return (
                        <Messages
                            addMessage={addMessage}
                            uppdateNewMessage={updateMess}
                            SenderDate={store.getState().messagesPage.SenderDate}
                            SendsData={store.getState().messagesPage.SendsData}
                            newMessage={store.getState().messagesPage.newMessage}
                        />)
                }
            }
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;