const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const DELL_POST = 'DELL_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
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
    ],
    profile: null
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
                    PostDate:[...state.PostDate,newPost],
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
                profile: action.profile
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
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const addPostActionCreactor = () => ({ type: ADD_POST })
