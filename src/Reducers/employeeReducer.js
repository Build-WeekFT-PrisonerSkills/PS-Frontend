import * as a from '../Actions/authAction'

const initialState = {
    user: {},
    isLoading: false,
    error: ''

}

export const employeeReducer = (state = initialState, action) => {
    switch(action.type){

        case a.ADD_EMPLOYEE:
        return {
            ...state,
            isLoading: true,
            error: ''
        }
        case a.ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                user: { 
                    ...state.user, 
                    email: action.payload.email,
                    password: action.payload.password,
                },
                error: ''
            }
        case a.ADD_EMPLOYEE_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            }
// ***********************************************************************************
        case a.DELETE_EMPLOYEE:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case a.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                user: { 
                    ...state.user, 
                    email: action.payload.email,
                    password: action.payload.password,
                },
                error: ''
            }
        case a.DELETE_EMPLOYEE_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            }
// **********************************************************************************
        case a.EDIT_EMPLOYEE:
            return {
            ...state,
            isLoading: true,
            error: ''
        }
        case a.EDIT_EMPLOYEE_SUCCESS:
            return {
                ...state,
                user: { 
                    ...state.user, 
                    email: action.payload.email,
                    password: action.payload.password,
                },
                error: ''
            }
        case a.EDIT_EMPLOYEE_FAIL:
            return {
                ...state,
                error: action.payload.response.data.message,
            }
        default:
            return state;
    }
}