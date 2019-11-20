import React, {useState, useEffect} from "react";
import styled  from "@emotion/styled";
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";
import {logIn} from '../Actions/authAction';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
`
const MainContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffff;
`
const FormEntry = styled.div`
  margin: 20px;
`
const ImgContainer = styled.div`
  margin: 0 auto;
`
const FormContainer = styled.div`
  margin: 0 auto;
`
const Title = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */
  color: black;
`

const LoginForm = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    // i want to pass email and password values to my actions -> reducers -> store etc
    props.logIn(state);
    props.history.push('/dashboard');
  }
  return (
    <MainContainer>
      <ImgContainer>
        <img src='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9' style={{width: '30rem'}}alt='electricion working on lines' />
      </ImgContainer>
      <FormContainer>
        <Title>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <FormEntry>
            Email: <br></br>
            <input
              type='email' 
              name='email' 
              placeholder='E-mail'
              value={props.email}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            Password: <br></br>
            <input
              type='password' 
              name='password' 
              placeholder='Password'
              value={props.password}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <button type='submit' >Login</button>
        </form>
        </Title>
      </FormContainer>
    </MainContainer>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(
  mapStateToProps, 
  {logIn})(LoginForm);





//WALTERS FORM WORKS GREAT, just couldn't get it to work with my redux... not smart enough lol

//Login Form
// import React, {useEffect} from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import styled  from "@emotion/styled";
// import "../ComponentStyles/styles.css";
// import "../ComponentStyles/styles-custom.css";
// import { axiosWithAuth } from "../Utils/axiosWithAuth";


// const StyledErrorMessage = styled.p`
//   color: red;
//   margin: 10px;
// `

// const MainContainer = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   background: #fff;
// `

// const FormEntry = styled.div`
//   margin: 20px;
// `
// const ImgContainer = styled.div`
//   margin: 0 auto;
// `
// const FormContainer = styled.div`
//   margin: 0 auto;
// `

// const Title = styled.h1`
//   font-family: Lato;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 48px;
//   line-height: 58px;
//   /* identical to box height */
//   text-align: center;
//   color: #000000;
// `

// const LoginForm = ({ values, status, errors, touched, setUserToken, isSubmitting}) => {
//   useEffect(() => {
//     if (status) {
//       setUserToken(status)
//     }
//   }, [status])

//   return (
//     <MainContainer>

//     <ImgContainer>
//       <img src='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9' style={{width: '30rem'}}alt='electricion working on lines' />
//     </ImgContainer>
//     <FormContainer>
//       <Form>
//           <Title>Login</Title>
//           <FormEntry>
//             <Field className='loginEntry' type='email' name='email' placeholder='Email' />
//             {touched.email && errors.email && (<StyledErrorMessage>{errors.email}</StyledErrorMessage>)}
//           </FormEntry>
//           <FormEntry>
//             <Field className='loginEntry' type='password' name='password' placeholder='Password' />
//             {touched.password && errors.password && (<StyledErrorMessage>{errors.password}</StyledErrorMessage>)}
//           </FormEntry>
//           <button type='submit'>Login</button>
//       </Form>
//     </FormContainer>
//     </MainContainer>
//   )
// };

// const FormikLoginForm = withFormik({
//   mapPropsToValues({email, password}) {
//     return {
//       email: email || '',
//       password: password || ''
//     };
//   },

//   validationSchema: Yup.object().shape({
//     email: Yup.string().required('Must Enter a email'),
//     password: Yup.string().required('Must Enter a Password')
//   }),

//   handleSubmit(values, {setStatus}) {
    
//     // axiosWithAuth()
//     //   .post('/api/auth/login', values)
//     //   .then(res =>{
//     //     console.log(res);
//     //     setStatus(res.data);
//     //   })
//     //   .catch(err => console.log(err.res));
//   }
// })(LoginForm);

// export default FormikLoginForm