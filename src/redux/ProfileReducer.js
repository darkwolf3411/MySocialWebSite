const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const DELL_POST = 'DELL_POST';

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
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText != '') {
                let newPost = {
                    id: 1,
                    m: state.newPostText,
                    likeCound: 0
                };
                state.PostDate.push(newPost);
                state.newPostText = '';
                return state;
            }
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case DELL_POST:
            state.PostDate = state.PostDate.splice(action.id,1)
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
export const addPostActionCreactor = () => ({ type: ADD_POST })
