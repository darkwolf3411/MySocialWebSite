import { profileAPI, API } from './../components/API/API';
const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const DELL_POST = 'DELL_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_IMAGE = 'SET_USER_IMAGE';
const SET_NEW_STATUS = 'SET_NEW_STATUS';
const UPDATE_STATUS_TEXT = 'UPDATE_STATUS_TEXT';
const REDUCT_ACCPET_CHANGE = 'REDUCT_ACCPET_CHANGE';
const GET_FOLLOW_USER = 'GET_FOLLOW_USER';
const CHANGE_PROFILE_DATA = 'CHANGE_PROFILE_DATA';

let initialState = {
    newPostText: "",
    PostDate: [
        {
            id: 0,
            m: "Здарова очередной?",
            likeCound: 12
        },
    ],
    FriendData: [
        {
            friendAva: "https://is.gd/sRpZTV",
            friendName: "Илья",
            id: "1"
        }
    ],
    profile: null,
    profileImage: false,
    statusText: "",
    status: "",
    reductAccpet: false,
    isFollow: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText != '') {
                let newPost = {
                    id: 1,
                    m: state.newPostText,
                    likeCound: 0
                };
                return {
                    ...state,
                    PostDate: [...state.PostDate, newPost],
                    newPostText: ""
                };
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case DELL_POST: {
            return {
                ...state,
                PostDate: state.PostDate.splice(action.id, 1)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_NEW_STATUS: {
            return {
                ...state,
                status: action.status,
                statusText: ""
            }
        }
        case UPDATE_STATUS_TEXT: {
            return {
                ...state,
                statusText: action.text
            }
        }
        case REDUCT_ACCPET_CHANGE: {
            return {
                ...state,
                reductAccpet: action.accpet
            }
        }
        case GET_FOLLOW_USER: {
            return {
                ...state,
                isFollow: action.isFollow
            }
        }
        case CHANGE_PROFILE_DATA: {
            for (const key in state.profile) {
                if (key === action.name) {
                    debugger
                    return {
                        ...state,
                        ...state.profile[key] = action.value
                    }
                }
                for (const key in state.profile.contacts) {
                    if (key === action.name) {
                        debugger
                        return {
                            ...state,
                            ...state.profile.contacts[key] = action.value
                        }
                    }
                }
            }
        }
        default:
            return state
    }
}

export default profileReducer

export const dellPostCreater = (id) => ({
    type: DELL_POST,
    id: id
})

export const uppdatePostTextActionCreater = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})
export const reductAccpetChange = (accpet) => ({
    type: REDUCT_ACCPET_CHANGE,
    accpet
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const statusChange = (newStatus) => ({
    type: UPDATE_STATUS_TEXT,
    text: newStatus
})
export const setUserImage = (newImage, isImage) => ({
    type: SET_USER_IMAGE,
    newImage, isImage
})
export const changeProfileData = (name, value) => ({
    type: CHANGE_PROFILE_DATA,
    name, value
})
export const isFollow = (isFollow) => ({
    type: GET_FOLLOW_USER,
    isFollow
})
export const setNewPrfileImage = (newUserImage) => {
    return (dispatch) => {
        profileAPI.updateUserImage(newUserImage).then(response => {
            dispatch(setUserImage(response.data.large, true))
        })
    }
}
export const getFollowUser = (userID) => {
    return (dispatch) => {
        API.getFollowAPI(userID).then(data => {
            dispatch(isFollow(data))
        })
    }
}
export const setNewStatus = (status) => ({
    type: SET_NEW_STATUS,
    status
})
export const getStatus = (userID) => {
    debugger
    return (dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setNewStatus(response.data))
        })
    }
}
export const updateStatus = (newStatus) => {
    debugger
    return (dispatch) => {
        profileAPI.updateStatus(newStatus).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setNewStatus(newStatus))
            }
        })
    }
}
export const addPostActionCreactor = () => ({ type: ADD_POST })
