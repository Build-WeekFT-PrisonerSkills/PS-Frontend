import { combineReducers } from 'redux';
import { authReducer as auth } from './authReducer';
import { employeeReducer as emp } from './employeeReducer';
import { prisonReducer } from './prisonReducer';

export default combineReducers({
  auth,
  emp,
  prisonReducer
});