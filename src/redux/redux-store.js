import { combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import messageReducer from './MessagesReducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messageReducer
    }
);

let store = createStore(reducers);

export default store;