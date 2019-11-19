import { axiosWithAuth } from "../Utils/axiosWithAuth";

// authReducer REGISTER actions
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const registerUser = credentials => dispatch => {
  console.log(credentials)
  dispatch({ type: REGISTER_START });
  axiosWithAuth()
    .post('/api/auth/register', credentials)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
      console.log("post register info",res.data)
      })
    .catch(err => {
      dispatch({ type: REGISTER_FAIL, payload: err })
      // console.log(err)
      });
};

// authReducer login actions
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const logIn = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('/api/auth/login', credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      localStorage.setItem("token", res.data.token);
      // console.log(res.data)
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err })
      // console.log(err)
    });
};