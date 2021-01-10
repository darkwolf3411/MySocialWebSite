import { combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import messageReducer from './MessagesReducer';
import usersReducer from './UsersReducer';
import serchReducer from './SerchReducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        usersPage: usersReducer,
        SerchPage: serchReducer
    }
);

let store = createStore(reducers);

window.store = store

export default store;

