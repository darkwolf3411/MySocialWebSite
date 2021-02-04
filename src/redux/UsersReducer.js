import { API } from './../components/API/API';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const IS_SERCH = "IS_SERCH"
const IS_BUTTON_FOLLOW_CLICK = "IS_BUTTON_FOLLOW_CLICK"


let initialState = {
    users: [],
    currentPage: 0,
    totalUsersCount: 5,
    isSerch: true,
    toggleFollowButt: false,
    followChoose: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case IS_SERCH:
            return {
                ...state,
                isSerch: action.isSerchValue,
                users: []
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case IS_BUTTON_FOLLOW_CLICK:
            
            return {
                ...state,
                followChoose: action.toggleFollowButt
                ? [...state.followChoose, action.userID]
                : state.followChoose.filter(id => id != action.userID)
            }
        default:
            return state;
    }
}

export default usersReducer;

export const getUsers = () => {
    return (dispatch) => {
        dispatch(isSerch(true));
        API.getUsersAPI().then(data => {
            dispatch(isSerch(false))
            dispatch(setUsers(data.items));
        })
    }
}
export const unfollowTC = (userID) => {
    
    return (dispatch) => {
        dispatch(onFollowButtClick(true,userID))
        API.unFollowAPI(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(onFollowButtClick(false,userID))
                dispatch(unfollow(userID))
            }
        });
    }
}
export const setNewUsers = (page) => {
    return (dispatch) => {
        dispatch(isSerch(true))
        API.getUserAPI(page).then(data => {
            dispatch(isSerch(false))
            dispatch(setUsers(data.items));
        });
    }
}
export const followTC = (userID) => {
    return (dispatch) => {
        dispatch(onFollowButtClick(true,userID))
        API.followAPI(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(onFollowButtClick(false,userID))
                dispatch(follow(userID))
            }
        });
    }
}

export const follow = (id) => ({ type: FOLLOW, id })

export const unfollow = (id) => ({ type: UNFOLLOW, id })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const onFollowButtClick = (toggleFollowButt,userID) => ({ type: IS_BUTTON_FOLLOW_CLICK, toggleFollowButt,userID })

export const isSerch = (isSerchValue) => ({ type: IS_SERCH, isSerchValue })
