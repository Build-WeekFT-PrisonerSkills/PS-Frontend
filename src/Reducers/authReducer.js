import * as a from '../Actions/authAction'

const initialState = {
    user: {},
    isLoading: false,
    error: ''
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case a.REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case a.REGISTER_SUCCESS:
            return {
                ...state,
                user: { 
                    ...state.user, 
                    email: action.payload.email,
                    password: action.payload.password,
                    id: action.payload.id,
                },
                error: ''
            }
        case a.REGISTER_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            }
// ***********************************************************************************
        case a.LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case a.LOGIN_SUCCESS:
            return {
                ...state,
                user: { 
                    ...state.user, 
                    email: action.payload.email,
                    password: action.payload.password,
                    id: action.payload.id,
                },
            };
        case a.LOGIN_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            };
            
        default:
            return state;
    }
}