import { authUserData } from './../components/API/API';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id:null,
    login:null,
    email:null,
    isAuth: false
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export default AuthReducer
export const setAuthUserData = (id,login,email) => ({
    type: SET_USER_DATA, data: {id,login,email}
})

export const getUsersData = () => {
    return (dispatch) => {
        authUserData.getAuthData().then(data =>{
            if (data.resultCode === 0) {
                let {id,login,email} = data.data
                dispatch(setAuthUserData(id,login,email))
            }
        })
    }
}

