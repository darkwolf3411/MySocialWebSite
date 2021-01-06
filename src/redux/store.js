import profileReducer from './ProfileReducer';
import messageReducer from './MessagesReducer';

let store = {
    _state: {
        messagesPage: {
            newMessage: "",
            SendsData: [
                {
                    ava: "https://is.gd/sRpZTV",
                    name: "Илья",
                    SendMessage: "привет займи сотку урод блять",
                },
            ],
            SenderDate: [
                {
                    ava: "https://is.gd/sRpZTV",
                    name: "Илья Киселев",
                    lstmess: "привет займи сотку урод блять",
                    id: "1"
                },
                {
                    ava: "https://is.gd/n6J1dK",
                    name: "Андрей Землянский",
                    lstmess: "Пошли флексить",
                    id: "2"
                },
                {
                    ava: "https://is.gd/bQ1Wbl",
                    name: "Максим Белев",
                    lstmess: "Кс айда",
                    id: "3"
                },
            ]
        },
        profilePage: {
            newPostText: "",
            PostDate: [
                {
                    id: 0,
                    m: "Здарова очередной?",
                    likeCound: 12
                },
                {
                    id: 3,
                    m: "hi",
                    likeCound: 100
                },
            ],
            FriendData: [
                {
                    friendAva: "https://is.gd/sRpZTV",
                    friendName: "Илья",
                    id: "1"
                },
                {
                    friendAva: "https://is.gd/n6J1dK",
                    friendName: "Андрей",
                    id: "2"
                },
                {
                    friendAva: "https://is.gd/bQ1Wbl",
                    friendName: "Максим",
                    id: "3"
                },
            ]
        }
    },
    _callSubscriber() {
        console.log("hello word")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage ,action);
        this._callSubscriber(this._state);
    },
}


export default store;
