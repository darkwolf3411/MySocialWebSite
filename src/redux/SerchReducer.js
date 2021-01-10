const CHANG_SERCH_TEXT = 'CHANG_SERCH_TEXT';
const DELL_SERCH_TEXT = 'DELL_SERCH_TEXT';
const ADD_SERCH_RESULT = 'ADD_SERCH_RESULT';
const IS_FETCHING_SERCH = 'IS_FETCHING_SERCH';

let initialState = {
    newSerchValue: "",
    serchResult: [],
    isFetching: false
}
const serchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANG_SERCH_TEXT:
            return {
                ...state,
                newSerchValue: action.newText
            }
        case DELL_SERCH_TEXT:
            return {
                ...state,
                newSerchValue: "",
                serchResult: []
            }

        case ADD_SERCH_RESULT:
            return {
                ...state,
                serchResult: action.serchResult
            }
        case IS_FETCHING_SERCH:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
export default serchReducer
export const isFetchingSerchAC = (isFetching) => ({
    type: IS_FETCHING_SERCH, isFetching
})
export const serchChangeAC = (newSerchText) => ({
    type: CHANG_SERCH_TEXT,
    newText: newSerchText
})
export const dellSerchTextAC = () => ({
    type: DELL_SERCH_TEXT
})
export const addSerchResultAC = (result) => ({
    type: ADD_SERCH_RESULT,
    serchResult: result
})
