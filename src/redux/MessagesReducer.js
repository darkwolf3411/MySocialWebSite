const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                ava: "https://is.gd/sRpZTV",
                name: "Кирилл",
                SendMessage: state.newMessage,
            };
            state.SendsData.push(newMessage);
            state.newMessage = "";
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMess;
            return state;
        default:
            return state;
    }
}

export default messageReducer;

export const uppdateNewMessageActionCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newMess: text
})

export const addessageActionCreactor = () => ({
    type: ADD_MESSAGE
})
