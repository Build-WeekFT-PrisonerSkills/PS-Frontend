import { combineReducers } from 'redux';
import { authReducer as auth } from './authReducer';
import { employeeReducer as emp } from './employeeReducer';
import { prisonReducer as prison} from './prisonReducer';

export default combineReducers({
  auth,
  emp,
  prison
});