import React from 'react'
import Style from './Messages.module.css'
import Sender from './Sender/Sender';
import Send from './Send/Send';

const Messages = (props) => {
    let addMessage = () => {
        props.addMessage();
    }
    let updateMess = (e) => {
        let mess = e.target.value;
        props.uppdateNewMessage(mess)
    }
    let SenderSplit = props.SenderDate.map(a => <Sender
        ava={a.ava}
        name={a.name}
        lstmess={a.lstmess}
        key={a.id}
        id={a.id} />)
    let SendSplit = props.SendsData.map(a => <Send ava={a.ava} key={a.id} name={a.name} SendMessage={a.SendMessage} />)
    return (
        <div className={Style.MessWrapper}>
            <div className={Style.Senders}>
                <div>
                    {SenderSplit}
                </div>
            </div>
            <div className={Style.DialogWrapper}>
                <div className={Style.Sends}>
                    {SendSplit}
                </div>
                <div className={Style.ChatInputWrapper}>
                    <div>
                        <input value={props.newMessage}
                            onChange={updateMess}
                            type="text"
                            placeholder="Введите свое сообщение . . ." />
                        <button onClick={addMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;