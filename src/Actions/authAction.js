import { axiosWithAuth } from "../Utils/axiosWithAuth";
import axios from 'axios';

//Login and Register Actions
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
//Prison Actions
export const ADD_PRISON = "ADD_PRISON";
export const ADD_PRISON_SUCCESS = "ADD_PRISON_SUCCESS";
export const ADD_PRISON_FAIL = "ADD_PRISON_FAIL";
export const DELETE_PRISON = "DELETE_PRISON";
export const DELETE_PRISON_SUCCESS = "DELETE_PRISON_SUCCESS";
export const DELETE_PRISON_FAIL = "DELETE_PRISON_FAIL";
export const EDIT_PRISON = "EDIT_PRISON";
export const EDIT_PRISON_SUCCESS = "EDIT_PRISON_SUCCESS";
export const EDIT_PRISON_FAIL = "EDIT_PRISON_FAIL";
export const GET_PRISONS_SUCCESS = "GET_PRISONS_SUCCESS";
//Employee Actions
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const ADD_EMPLOYEE_SUCCESS = "ADD_EMPLOYEE_SUCCESS";
export const ADD_EMPLOYEE_FAIL = "ADD_EMPLOYEE_FAIL";
export const EDIT_EMPLOYEE = "ADD_EMPLOYEE";
export const EDIT_EMPLOYEE_SUCCESS = "ADD_EMPLOYEE_SUCCESS";
export const EDIT_EMPLOYEE_FAIL = "ADD_EMPLOYEE_FAIL";
export const DELETE_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE_SUCCESS = "ADD_EMPLOYEE_SUCCESS";
export const DELETE_EMPLOYEE_FAIL = "ADD_EMPLOYEE_FAIL";

export const registerUser = (credentials, props) => dispatch => {
  dispatch({ type: REGISTER_START });
  axiosWithAuth()
    .post('/api/auth/register', credentials)
    .then(res => {
      console.log("register action/dispatch res", res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
      props.history.push('/CC_AddPrison');
      })
    .catch(err => {
      dispatch({ type: REGISTER_FAIL, payload: err })
      });
};

export const logIn = (credentials, props) => dispatch => {
  console.log("creds", credentials)
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('/api/auth/login', credentials)
    .then(res => {
      console.log("res",res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      localStorage.setItem("token", res.data.token);
      props.history.push('/dashboard')
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err })
    });
};

export const addPrison = credentials => dispatch => {
  dispatch({ type: ADD_PRISON });
  axiosWithAuth()
    .post('/api/users/prison', credentials)
    .then(res => {
      dispatch({ type: ADD_PRISON_SUCCESS, payload: res.data })
      })
    .catch(err => {
      dispatch({ type: ADD_PRISON_FAIL, payload: err })
      });
};

export const deletePrison = id => dispatch => {
  // console.log("id in deletePrison", id)
  const prisoners = [];
  dispatch({ type: DELETE_PRISON });

  axiosWithAuth()
    .get(`/api/users/${id}/inmates`)
      .then(res => {
        // console.log(res)
        res.data.forEach((prisoner) => {

          axiosWithAuth()
            .delete(`/api/users/inmates/${prisoner.id}`)
            .then(res => console.log("find it",res))
        })

        return axiosWithAuth().delete(`/api/users/${id}`)
      })
    .then(res => {
      console.log("res", res)
      // i want the id not a message prop. send me a message and the id or just the id. 
      dispatch({ type: DELETE_PRISON_SUCCESS, payload: res.data })
      })
    .catch(err => {
      dispatch({ type: DELETE_PRISON_FAIL, payload: err })
    });
};

export const editPrison = (credentials, props) => dispatch => {
  dispatch({ type: EDIT_PRISON });
  axiosWithAuth()
    .put('/api/users/:id', credentials)
    .then(res => {
      dispatch({ type: EDIT_PRISON_SUCCESS, payload: res.data })
      props.history.push('/editPrison/:id');
      })
    .catch(err => {
      dispatch({ type: EDIT_PRISON_FAIL, payload: err })
      });
};

export const getPrisons = () => dispatch => {
  axios
    .get(`https://prisoner-skills-bw.herokuapp.com/api/users/`)
    .then(res => {
      dispatch({ type: GET_PRISONS_SUCCESS, payload: res.data})
    })
    .catch(err => console.log(err))
}

export const addEmployee = credentials => dispatch => {
  dispatch({ type: ADD_EMPLOYEE });
  axiosWithAuth()
    .post('/api/users/inmates', credentials)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_EMPLOYEE_SUCCESS, payload: res.data })
      })
    .catch(err => {
      dispatch({ type: ADD_EMPLOYEE_FAIL, payload: err })
      });
};

export const deleteEmployee = credentials => dispatch => {
  dispatch({ type: DELETE_EMPLOYEE });
  axiosWithAuth()
    .delete('/api/users/inmates/:id', credentials)
    .then(res => {
      dispatch({ type: DELETE_EMPLOYEE_SUCCESS, payload: res.data })
      })
    .catch(err => {
      dispatch({ type: DELETE_EMPLOYEE_FAIL, payload: err })
      });
};

export const editEmployee = credentials => dispatch => {
  dispatch({ type: EDIT_EMPLOYEE });
  axiosWithAuth()
    .put('/api/users/inmates/:id', credentials)
    .then(res => {
      dispatch({ type: EDIT_EMPLOYEE_SUCCESS, payload: res.data })
      })
    .catch(err => {
      dispatch({ type: EDIT_EMPLOYEE_FAIL, payload: err })
      });
};