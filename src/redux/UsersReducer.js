const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const IS_SERCH= "IS_SERCH"

let initialState = {
    users: [],
    currentPage: 0,
    totalUsersCount: 5,
    isSerch: true
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
        default:
            return state;
    }
}

export default usersReducer;

export const follow = (id) => ({ type: FOLLOW, id })

export const unfollow = (id) => ({ type: UNFOLLOW, id })

export const setNewUsers = (id) => ({ type: UNFOLLOW, id })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const isSerch = (isSerchValue) => ({ type: IS_SERCH, isSerchValue })
