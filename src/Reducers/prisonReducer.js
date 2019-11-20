import * as a from '../Actions/authAction'

const initialState = {
    user: {},
    isLoading: false,
    error: ''

}

export const prisonReducer = (state = initialState, action) => {
    switch(action.type){

        case a.ADD_PRISON:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case a.ADD_PRISON_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                error: ''
            };
        case a.ADD_PRISON_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            };
// **********************************************************************************
        case a.DELETE_PRISON:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case a.DELETE_PRISON_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                error: ''
            };
        case a.DELETE_PRISON_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            };
// **********************************************************************************
        case a.EDIT_PRISON:
            return {
            ...state,
            isLoading: true,
            error: ''
        };
        case a.EDIT_PRISON_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                error: ''
            };
        case a.EDIT_PRISON_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            };
        default:
            return state;
    }
}