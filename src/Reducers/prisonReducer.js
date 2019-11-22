import * as a from '../Actions/authAction'

const initialState = {
    prisons: [],
    prison: {},
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
                prison: action.payload,
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
                // in res.data when you send it as action.payload. send over an id instead of an message. 
                prisons: state.prisons.filter(prison => prison.id !== action.payload),
                isLoading: false,
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
                prison: action.payload,
                error: ''
            };
        case a.EDIT_PRISON_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            };
// ********************************************************************************
        case a.GET_PRISONS_SUCCESS:
            return {
                ...state,
                prisons: action.payload,
            }
        default:
            return state;
    }
}