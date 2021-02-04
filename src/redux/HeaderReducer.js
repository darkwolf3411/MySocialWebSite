const IS_HEADER_MENU_CLICK = 'IS_HEADER_MENU_CLICK';

let initialState = {
    toggleMenuClick: false
}
const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_HEADER_MENU_CLICK:
            return{
                ...state,
                toggleMenuClick: action.toggleMenuClick
            }
        default:
            return state
    }
}
export default HeaderReducer
export const isHeaderMenuClick = (toggleMenuClick) => ({
    type: IS_HEADER_MENU_CLICK, toggleMenuClick
})

