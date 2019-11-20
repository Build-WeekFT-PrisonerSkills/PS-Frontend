import * as a from '../Actions/authAction'

const initialState = {
    employee: {},
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
                employee: action.payload,
                isLoading: false,
                error: null,
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
                isLoading: false,
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