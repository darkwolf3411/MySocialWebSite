import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import messageReducer from './MessagesReducer';
import usersReducer from './UsersReducer';
import serchReducer from './SerchReducer';
import HeaderReducer from './HeaderReducer';
import AuthReducer from './AuthReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        usersPage: usersReducer,
        SerchPage: serchReducer,
        headerPage: HeaderReducer,
        auth: AuthReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store;

