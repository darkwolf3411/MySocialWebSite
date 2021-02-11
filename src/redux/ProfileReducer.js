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
const SET_NEW_USER_DATA = 'SET_NEW_USER_DATA';
const SET_LOOKING_FOR_JOB = 'SET_LOOKING_FOR_JOB';

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
                profile:{
                    ...state.profile,
                    ["aboutMe"]: action.status
                },
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
        case SET_LOOKING_FOR_JOB: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    lookingForAJob: action.value
                }
            }
        }
        case GET_FOLLOW_USER: {
            return {
                ...state,
                isFollow: action.isFollow
            }
        }
        case SET_NEW_USER_DATA: {
            return {
                ...state,
                profile: action.data
            }
        }
        case CHANGE_PROFILE_DATA: {
            debugger
            if (action.name === "profile") {
                return{
                    ...state,
                    profile: {
                        ...state.profile,
                        [action.key]: action.value
                    }
                }   
            }else if (action.name === "contacts") {
                return{
                    ...state,
                    profile: {
                        ...state.profile,
                        contacts:{
                            ...state.profile.contacts,
                            [action.key]: action.value
                        },
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
export const changeProfileData = (key, value, name) => ({
    type: CHANGE_PROFILE_DATA,
    key, value, name
})
export const isFollow = (isFollow) => ({
    type: GET_FOLLOW_USER,
    isFollow
})
export const setNewUsersData = (newUserData) => ({
    type: SET_NEW_USER_DATA,
    data: newUserData
})
export const setLookingForJob = (value) => ({
    type: SET_LOOKING_FOR_JOB,
    value
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
export const updateUsersSettings = (data) => {
    return (dispatch) => {
        profileAPI.updateProfileData(data).then(response => {
            if (response.resultCode === 0) {
                dispatch(setNewUsersData(response.data))   
            }
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
